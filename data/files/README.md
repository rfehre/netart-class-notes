# Data - September 5

### Binary

numbering systems
  arabic numerals, decimal, base 10 - 0123456789
    pattern is that each column is a multiple of 10 (the ones, the tens, hundreds, etc. can represent anything with 10 symbols)
    historians best guess as to why we chose 10 is because we have 10 finger. literally insignificant outside of that. doesn't matter how many numerals, how many symbols. could represent any quantity with 8 symbols, 5 symbols, etc.

  e.g. for base8
    1s, 8s, 16s. 203 would = 35. (2x16, 0x8, 3x1 = 35) base10 allows us to use fewer symbols to represent 35. very rare to see base8. just making a point.

  we do see base 16 a lot. 'hexadecimal', (Hex).
    we also see base2 (binary)

  e.g. for base2 (1s, 2s, 4s, 8s, 16s, 32s, 64s, 128s [btw 8 digits in binary = a byte, a single 1 or 0 = a bit]) a byte is a value contained by 8 bits
    10011101 = 157
    128 + 0 + 0 + 16 + 8 + 4 + 0 + 1 = 157

  how would you write 31 in binary?
    00011111 - oh whoops bad binary number lol

  how about 27?
    000110011

  largest value in binary
    11111111 = 255 (color values, only takes a byte to store that value, knob goes from 0 - 255) options for color are 255x255x255, 16 million something. each pixel has 16 million values on screen.

  color fact - with light you can make any color with red, green, blue, with pigment it's red, yellow blue. that's why old tvs had those rgb bars. would change brightness to show different images.

  base16 (Hex) (1s, 16s, ...)
    0123456789ABCDEF
    C4 = 196 (16x12, 4x1)
    FF = 255 (16x15, 15x1)
    to write a byte in hex we need 2 (FF) values, to write it in binary we need 8 (11111111), base10 we need 3 (255)

  a byte is a value between 1-255 made up of 8 bits.

  so how does this translate to stuff in computers? what physical form do these values take on? if i said 'go touch that data' what would that look like?

  ELECTRICITY running through circuitboard of yr computer. electricity can now represent a value, just like paper can represent a value if we write shit on it. but we can fit a lot more values in a computer.

  charles babich & ada lovelace - charles invented mechanical computer (never built) ada lovelace wrote the programs for it. used gears, base10 0-9

  hat can store digital data?
    flash drive, hard drive, floppy disk, cd-roms, etc. etc.

  volatile - if electricity stops, lose data
    nonvolatile - doesn't matter if electricity stops (paper or something)
    as long as we can retain the sequences of 1s and 0s we can retain data, even if we jus write it all out on a piece of paper.

  heart/brain of computer - CPU - Central Processing unit
      little chip that essentially does all the math. all data processing. where software happens, not where data is stored.
  GPU - graphical processing unit
      so cpu doesn't have to handle all the graphics which were taking a lot of data processing. gpu also lends itself to machine learning & other specific tasks. designed differently from cpu.
    RAM - computer's memory, volatile storage - random access memory.
      when you turn computer off, ram turns     off, all processes stops BUT when you turn it back on it comes back because it's store in the...
    HARD DRIVE - long term memory, nonvolatile storage -
      can load up all data stored in hard drive, pull into ram and cpu,

  when working on computer you're using ram, when you save something you're using yr hard drive.

  ASCII - 127 characters
      interoperability - we want computers/software whatever to be able to work togehtetr, so we need to choose to agree on the same stuff. mapping values to letters for example needs to be consistent. it can be arbitrary, but we all have to agree on it for interoperability's sake.

  what kind of bias does ASCII have?
      no accents, no way to write in spanish in ascii. or mandarin. or any language with symbols that aren't english.

  now we have unicode which has like 65000 characters rather than 127'

  image files can't just be raw data. there's metadata that needs to be stored in what's called a 'header'. photoshop does a good job of abstracting that. author, location, width, height, all metadata. most file formats, .txt is rare exception as well as code, media files always start with metadata about the media. body is the raw data that makes the media.

  metadata stored in header of images would be like this [for a bmp file]:

  42 40 - (42 - B 40 - M alway start with thee two bytes [bitmap] jpeg would start with jp or jpg, this is the file type)
    66 00 00 00 - the file size (in bytes) [102]
    00 00 00 00 - special use for app
    36 00 00 00 - how many bytes into the file does the raw data start [54]
    28 00 00 00 - size of the rest of the header
    04 00 00 00 - 4px width
    04 00 00 00 - 4px height
    01 00 18 00 - color plane && bit depth (18 = 24bit [1x16 8x1])
    00 00 00 00 - compression method, not worrying about this now
    30 00 00 00 - raw data size (48bytes) 30 [3x16 1x0]
    00 00 00 00 - //misc info
    00 00 00 00 -
    00 00 00 00 -
    00 00 00 00 -

    pixel orientation starts bottom right, right to left. 4x4, 16 pixels total. .bmp files raw data info should be backwards. so rgb red would ordinarily be ff 00 00 would be 00 00 ff in a .bmp file.

    00 ff 00 - green
    ff 00 00 - blue
    00 00 00 - black
    00 00 ff -
    ff ff ff
    00 ff 00
    00 00 ff
    ff ff ff
    ff ff ff
    00 00 ff
    00 ff 00
    ff ff ff
    00 00 ff
    00 00 00
    ff 00 00
    00 ff 00

  difference between markdown [.md] and text [.txt] is markdown allows you to make lists and headers etc. markdown the de facto file format for writing about code.

# for header
## for smaller header
### for smaller headers etc
- for lists
  - for little
  - for lists

html example

```html

<a href="http://saic.edu"></a>

```
js example

```js
Math.random();
```
[LINKS ALSO](http://google.com)

*italic*
**bold**

COMMAND + SHIFT + P SUPER IMPORTANT
