# Material Time Control

A simple time picker component using angular/material2 (5.0.0-rc0).  
While this component only shows a 12 hour clock it can easily be extended to show 12/24 mode.  
The main focus here a button beside a normal textbox that opens a dialog to select your hour, minute and meridan.  
  
See interactive example in stackbliz -> https://stackblitz.com/edit/material-time-control  
See a demo with this stackblitz -> https://material-time-control.stackblitz.io/
  
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

### Prerequisites

Required:  
normal angular packages 5.0.1  
"@angular/material": "^5.0.0"  
"@angular/flex-layout": "^2.0.0-beta.10-4905443"


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
