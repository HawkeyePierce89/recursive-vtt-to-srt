const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const vtt2srt = require('node-vtt-to-srt');

const args = minimist(process.argv.slice(2));

const projectDir = process.cwd();
const pathToSearch = args.path || projectDir;

function vttToSrt(pathToVtt, shouldDeleteVtt) {
    fs.createReadStream(pathToVtt)
        .pipe(vtt2srt())
        .pipe(fs.createWriteStream(pathToVtt.substring(0, pathToVtt.length - 4) + '.srt'));

    if (shouldDeleteVtt) {
        fs.unlinkSync(pathToVtt);
    }
}

function searchVtt(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const isDirectory = fs.lstatSync(fullPath).isDirectory();
        const isVtt = fullPath.toLowerCase().endsWith('.vtt');

        if (isDirectory) {
            searchVtt(fullPath);
        } else if (isVtt) {
            vttToSrt(fullPath, args.delete);
        }
    });
}

searchVtt(pathToSearch);
