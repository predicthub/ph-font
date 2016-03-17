# PH icons

Suite of pictographic icons used in PredictHub apps


## Getting started

```html
<link rel="stylesheet" href="path/to/ph-icons.min.css">
```

## Usage
### Basic icons

You can place icons just about anywhere using the CSS Prefix `ph` and the icon's name.
PH Icons is designed to be used with inline elements (we like the <i> tag for brevity, but using a <span> is more semantically correct).

```html
<i class="ph ph-[icon-name]"></i>
```

### Larger icons

To increase icon sizes relative to their container, use the ph-lg (33% increase), ph-2x, ph-3x, ph-4x, or ph-5x classes.

```html
<i class="si ph-[icon-name] ph-lg"></i> ph-lg
<i class="si ph-[icon-name] ph-2x"></i> ph-2x
<i class="si ph-[icon-name] ph-3x"></i> ph-3x
<i class="si ph-[icon-name] ph-4x"></i> ph-4x
<i class="si ph-[icon-name] ph-5x"></i> ph-5x
```


## Build

Make sure dependencies are installed
```sh
sudo apt-get install fontforge
npm install -g grunt-cli
npm install
```

To build the project use `grunt build` command


## Credits
Highly inspired from [font-awesome](http://fontawesome.io/)