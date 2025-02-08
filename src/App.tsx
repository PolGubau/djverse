import InfiniteMenu from "./components/InfiniteMenu";

const items = [
	{
		image: "https://picsum.photos/id/100/800",
		link: "https://google.com/",
		title: "Item 1",
		description: "This is pretty cool, right?",
	},
	{
		image: "https://picsum.photos/id/101/800",
		link: "https://google.com/",
		title: "Item 2",
		description: "This is pretty cool, right?",
	},
	{
		image: "https://picsum.photos/id/102/800",
		link: "https://google.com/",
		title: "Item 3",
		description: "This is pretty cool, right?",
	},
	{
		image: "https://picsum.photos/id/103/800",
		link: "https://google.com/",
		title: "Item 4",
		description: "This is pretty cool, right?",
	},
];
function App() {
	return (
		<div className="relative h-screen w-screen flex items-center justify-center">
			<InfiniteMenu items={items} />
		</div>
	);
}

export default App;
