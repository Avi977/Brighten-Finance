<?php
// Redirect to index.html for static hosting
if (file_exists("index.html")) {
    include "index.html";
} else {
    echo "Site is being deployed...";
}
?>
