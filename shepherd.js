const tour = new Shepherd.Tour({
  defaultStepOptions: {
	cancelIcon: {
	  enabled: true,
	},
  },
});

tour.addStep({
  id: "step1",
  title: "🌟 Welcome to VistaWall! 🌟",
  text: "VistaWall is a wallpaper app that allows you to discover and download beautiful wallpapers from around the world.",
  attachTo: {
	element: ".container",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Next",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.addStep({
  id: "step2",
  title: "🖼️ Explore Stunning Wallpapers 🖼️",
  text: "Scroll through the gallery to explore a variety of stunning wallpapers.",
  attachTo: {
	element: ".gallery",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Back",
	  action() {
		return this.back();
	  },
	},
	{
	  text: "Next",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.addStep({
  id: "step3",
  title: "🔍 View Wallpapers in Fullscreen 🔍",
  text: "Click on any wallpaper to view it in fullscreen mode.",
  attachTo: {
	element: ".wallpaper",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Back",
	  action() {
		return this.back();
	  },
	},
	{
	  text: "Next",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.addStep({
  id: "step4",
  title: "📥 Download Your Favorite Wallpapers 📥",
  text: "Click on the 'Download' button in fullscreen mode to download the wallpaper to your device.",
  attachTo: {
	element: "#download-btn",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Back",
	  action() {
		return this.back();
	  },
	},
	{
	  text: "Next",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.addStep({
  id: "step4-",
  title: "Close wallpaper",
  text: "Click on the 'Close' button in fullscreen mode to close the wallpaper.",
  attachTo: {
	element: "#close-btn",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Back",
	  action() {
		return this.back();
	  },
	},
	{
	  text: "Next",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.addStep({
  id: "step5",
  title: "🔄 Navigate Through Pages 🔄",
  text: "Use the 'Next Page' button to view more wallpapers.",
  attachTo: {
	element: "#next-btn",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Back",
	  action() {
		return this.back();
	  },
	},
	{
	  text: "Next",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.addStep({
  id: "step6",
  title: "🎉 Enjoy VistaWall! 🎉",
  text: "That's it! Have fun exploring and downloading beautiful wallpapers with VistaWall!",
  attachTo: {
	element: ".container",
	on: "bottom",
  },
  buttons: [
	{
	  text: "Complete",
	  action() {
		return this.next();
	  },
	},
  ],
});

tour.start();
