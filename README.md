# recursive-vtt-to-srt

### Hello everyone!
This app recursively converts subtitles from the VTT to SRT in folder. This app based on [node-vtt-to-srt](https://github.com/riazXrazor/vtt-to-srt) and [vtt-to-srt](https://github.com/tsur/vtt-to-srt), fine applications, but they convert only 1 specific VTT-file.

I hope this app will be useful for you.

### How install this?

`npm install vtt-to-srt --global`

or

`yarn global add vtt-to-srt`

### How use this?

`recursive-vtt-to-srt [--path PATH_TO_FOLDER] [--delete]`

or, of course

`npx recursive-vtt-to-srt [--path PATH_TO_FOLDER] [--delete]`

Where:
1) `path` – path to folder with subtitles, if `path` isn't exist the recursive-vtt-to-srt will work in current folder;
2) `delete` – if you want to delete original files after convert you should use this argument.
