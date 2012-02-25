# flv2mp3

While being a functional FLV to MP3 converter, flv2mp3 is not intended to be used as an actual converter. The sole purpose of this module is to show what else Node.js can be used for, apart from developing websites.

**Note**: The current version of flv2mp3 is not tested under Windows, and will mostly liked not work.

## Installation

### Install ffmpeg first

flv2mp3 uses ffmpeg for the conversion process, so make sure you install it first.

On Ubuntu

    $ apt-get install ffmpeg

On Mac

    $ brew install ffmpeg

On CentOS

    $ yum install ffmpeg

### Install flv2mp3

It is recommended to install flv2mp3 as a global module, so that you can call it from any path on your computer.

    $ [sudo] npm install flv2mp3 -g

## Uage

Specify the input FLV file and the optional output directory.

    Usage: flv2mp3 [options]

    Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -f, --file <path>  FLV file path
    -o, --out [path]   Output directory


