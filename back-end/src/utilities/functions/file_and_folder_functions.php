<?php

declare(strict_types=1);

namespace API\src\utilities\functions;

use Psr\Http\Message\UploadedFileInterface;


function moveUploadedFile(string $directory, UploadedFileInterface $uploadedFile, string $fileID = 'file'): ?string
{
    // check if directory exists
    if (!file_exists($directory)) {
        if (!mkdir($directory, 0755, true) && !is_dir($directory)) {
            error_log("Failed to create directory: $directory");
            return null;  // return null in case of failure
        }
    }

    // Get the file extension
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    $filename = sprintf('%s.%s', $fileID, $extension); // generate file name
    $destination = $directory . DIRECTORY_SEPARATOR . $filename; // full destination path

    try {
        // Move the uploaded file to the destination directory
        $uploadedFile->moveTo($destination);
        return $filename;  // return the filename after moving
    } catch (\Exception $e) {
        error_log("Failed to move uploaded file: " . $e->getMessage());
        return null;  // return null in case of failure
    }
}


/*
!--------------------------------------------------------------------------------------------------------------------------------------
*/


function checkfolder($directory)
{
    if (file_exists($directory)) {
        return true;
    } else {
        if (mkdir($directory, 0775, true)) {
            // Assign permissions after creating the folder
            chmod($directory, 0775);
            return true;
        } else {
            return false;
        }
    }
}


/*
!--------------------------------------------------------------------------------------------------------------------------------------
*/

function deleteFilesInFolder($folderPath)
{
    // Get an array of file names in the folder
    $files = glob($folderPath . '/*');

    // Loop through the files and delete each one
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }

    return true;
}

/*
!--------------------------------------------------------------------------------------------------------------------------------------
*/

function deleteFilefromFolder($filepath)
{
    // Check if the file exists before attempting to delete it
    if (file_exists($filepath)) {
        // Get the directory path of the file
        $directory = dirname($filepath);

        // Delete the file
        if (unlink($filepath)) {
            // Check if the directory is empty after deleting the file
            if (is_dir($directory) && count(glob("$directory/*")) === 0) {
                // Delete the directory if it's empty
                rmdir($directory);
            }
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


/*
!--------------------------------------------------------------------------------------------------------------------------------------
*/

function deleteFolder($folderPath)
{
    // Get an array of all items (files and directories) in the folder
    $items = glob($folderPath . '/*');

    // Loop through the items and delete files and recursively delete directories
    foreach ($items as $item) {
        if (is_file($item)) {
            // Delete file
            unlink($item);
        } elseif (is_dir($item)) {
            // Recursively delete subdirectory
            deleteFolder($item);
        }
    }
    // Delete the folder itself
    rmdir($folderPath);

    return true;
}


function initializeLogFile($FilePath): void
{
    // check if directory exists
    $logDirectory = dirname($FilePath);
    if (!file_exists($logDirectory)) {
        mkdir($logDirectory, 0777, true);
    }

    //check if file exists
    if (!file_exists($FilePath)) {
        // Create the log file
        $handle = fopen($FilePath, 'w');
        if ($handle !== false) {
            fclose($handle);
        } else {
            throw new \RuntimeException("Unable to create log file: " . $FilePath);
        }
    }
}

function isImageFile(UploadedFileInterface $uploadedFile): bool
{
    $allowedMimeTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg'];

    // الحصول على المسار المؤقت
    $tmpFilePath = $uploadedFile->getStream()->getMetadata('uri');

    // التأكد أن الملف تم رفعه وأن له مسار مؤقت
    if (!$tmpFilePath || !file_exists($tmpFilePath)) {
        return false;
    }

    // الحصول على نوع الملف الحقيقي من النظام
    $mimeType = mime_content_type($tmpFilePath);

    return in_array($mimeType, $allowedMimeTypes, true);
}
