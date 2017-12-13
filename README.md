# Material Time Control

A simple time picker component using angular/material2 (5.0.0-rc0).<br/>
While this component only shows a 12 hour clock it can easily be extended to show 12/24 mode.<br/>
The main focus here a button beside a normal textbox that opens a dialog to select your hour, minute and meridan.
<br/><br/>
I didn't focus on any responsive layouts as the only place I needed this was desktop but since it leverages flex throughout, it could be modified to change orientation in portrait phone mode.
<br/><br/>
See a demo with this stackblitz -> https://stackblitz.com/edit/material-time-control
<br/><br/>
Enjoy!

![Dialog Hours](./demo/assets/OpenDialog_Hours.png?raw=true)
![Dialog Minutes](./demo/assets/OpenDialog_Minutes.png?raw=true)


## Getting Started

To run this demo, npm install then np start<br/>
webpack-dev-server will fire up on port 3000

### Prerequisites

Required:<br/>
normal angular packages 5.0.1<br/>
"@angular/material": "^5.0.0-rc0"<br/>
"@angular/flex-layout": "^2.0.0-beta.10-4905443"


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to <a href="https://github.com/classlinkinc/angular-material-time-picker">classlinkinc/angular-material-time-picker</a>
for the awesome CSS to display the clock component

