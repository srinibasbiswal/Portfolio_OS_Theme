class AppStateDocument {
	constructor() {
		this.id = "";
		this.name = "";
		this.icon = "";
		this.componentName = "";
		this.order = "";
		this.isMaximized = false;
		this.isMinimized = false;
		this.isOpened = false;
		this.showInDesktop = false;
		this.showInStartMenu = false;
		this.showInTaskBar = false;
		this.showLinks = false;
		this.subComponent = {};
		this.isApplication = false;
	}
}

export default AppStateDocument;
