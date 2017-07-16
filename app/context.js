    const {remote} = require('electron');
    const {Menu, MenuItem} = remote;
    let submenu = new Menu();
    submenu.append(new MenuItem({ label: 'About', click () {openModal2()} }));
    submenu.append(new MenuItem({ label: 'Contact', click () {openModal3()} }));
    submenu.append(new MenuItem({ label: 'Downloads', click () {openModal4()} }));
    let submenu2 = new Menu();
    submenu2.append(new MenuItem({ label: 'Minimize', click () {win.minimize();} }));
    submenu2.append(new MenuItem({ label: 'Maximize', click () {win.maximize();} }));
    submenu2.append(new MenuItem({ label: 'Close App', click () {win.close();} }));
    let menu1 = new Menu();
    menu1.append(new MenuItem({ label: 'Options', click () {openModal1()} }));
    menu1.append(new MenuItem({ label: 'EzMusic', submenu: submenu}));
    menu1.append(new MenuItem({ label: 'Window', submenu: submenu2}));
    window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    menu1.popup(remote.getCurrentWindow());
    }, false);
