# Material Time Control

A simple time picker component using angular/material2 (6.3.0).  
While this component only shows a 12 hour clock it can easily be extended to show 12/24 mode.  
The main focus here a button beside a normal textbox that opens a dialog to select your hour, minute and meridan.  
  
See a demo with this stackblitz -> https://stackblitz.com/edit/material-time-control  
  
Enjoy!

![Dialog Hours](./demo/assets/OpenDialog_Hours.png?raw=true)
![Dialog Minutes](./demo/assets/OpenDialog_Minutes.png?raw=true)

## Install

```
yarn add SteveDunlap13/MaterialTimeControl
```
or
```
npm install SteveDunlap13/MaterialTimeControl
```

## Getting Started

To run this demo, run

```
npm install
npm start
```
or
```
yarn install
yarn start
```

and open http://localhost:4200/ in your browser.

## Build

To build the module run

```
tsc
```

### Usage
##### Tag:
```
<w-mat-timepicker> </w-mat-timepicker>
```
##### Attributes
###### color:
```
color
```

###### default time:
```
userTime
```

###### position of the icon:
```
position
```
```
default: left

values:
  right -> right of input filed
  left -> left of input filed
  inside -> inside the input filed 
```

###### translation for the placeholder at input field:
```
selectTime
```
```
default: 'Select time'
```

###### translation for the submit button:
```
submit
```
```
default: 'Okay'
```

###### translation for the submit button:
```
revert
```
```
default: 'Cancel'
```

### Prerequisites

Required:  
normal angular packages 6.0.6  
"@angular/material": "^6.3.0"  
"@angular/flex-layout": "6.0.0-beta.16"


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to <a href="https://github.com/classlinkinc/angular-material-time-picker">classlinkinc/angular-material-time-picker</a>
for the awesome CSS to display the clock component

## Updates

Dec 30, 2017
- merged a bunch of improvements from JumpLink (thank you)
- fixed the top of the hour bug noted by JaxonWright
- added 24 hour functionality as requested by Francis-Ide
- updated packages (expect typescript)
