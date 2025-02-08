import InfiniteMenu from "./components/InfiniteMenu";
import type { MenuItem } from "./components/menu/helpers/grid";

const items: MenuItem[] = [
	{
		image: "/fotos/rodaBera.webp",
		title: "Roda de Berà",
		date: new Date("2024-09-16"),
	},
	{
		image: "/fotos/geneva.webp",
		title: "Ginebra",
		date: new Date("2024-03-10"),
	},
	{
		image: "/fotos/kalmar.webp",
		title: "Kalmar",
		date: new Date("2023-01-23"),
	},
	{
		image: "/fotos/helsinki.webp",
		title: "Helsinki",
		date: new Date("2023-05-23"),
	},
	{
		image: "/fotos/madrid.webp",
		title: "Madrid",
		date: new Date("2023-10-18"),
	},
	{
		image: "/fotos/salamanca.webp",
		title: "Salamanca",
		date: new Date("2023-12-05"),
	},
	{
		image: "/fotos/pineda.webp",
		title: "Pineda de Mar",
		date: new Date("2024-03-19"),
	},
	{
		image: "/fotos/tampere.webp",
		title: "Tampere",
		date: new Date("2023-05-25"),
	},
	{
		image: "/fotos/barcelona.webp",
		title: "Barcelona",
		date: new Date("2022-12-27"),
	},
	{
		image: "/fotos/vilanova.webp",
		title: "Vilanova i la Geltrú",
		date: new Date("2022-09-09"),
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
