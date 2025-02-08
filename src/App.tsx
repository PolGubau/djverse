import InfiniteMenu from "./components/InfiniteMenu";
import type { MenuItem } from "./components/menu/helpers/grid";

const items: MenuItem[] = [
	{
		image: "/fotos/rodaBera.webp",
		title: "Roda de Berà",
		locale: "ca-ES",
		date: new Date("2024-09-16"),
	},
	{
		image: "/fotos/geneva.webp",
		title: "Ginebra",
		locale: "fr-CH",
		date: new Date("2024-03-10"),
	},
	{
		image: "/fotos/freiburg.webp",
		title: "Freiburg",
		locale: "de-DE",
		date: new Date("2024-10-20"),
	},
	{
		image: "/fotos/kalmar.webp",
		title: "Kalmar",
		locale: "sv-SE",
		date: new Date("2023-01-23"),
	},
	{
		image: "/fotos/helsinki.webp",
		title: "Helsinki",
		locale: "fi-FI",
		date: new Date("2023-05-23"),
	},
	{
		image: "/fotos/madrid.webp",
		title: "Madrid",
		locale: "es-ES",
		date: new Date("2023-10-18"),
	},
	{
		image: "/fotos/salamanca.webp",
		title: "Salamanca",
		locale: "es-ES",
		date: new Date("2023-12-05"),
	},
	{
		image: "/fotos/pineda.webp",
		title: "Pineda de Mar",
		locale: "ca-ES",
		date: new Date("2024-03-19"),
	},
	{
		image: "/fotos/tampere.webp",
		title: "Tampere",
		locale: "fi-FI",
		date: new Date("2023-05-25"),
	},
	{
		image: "/fotos/barcelona.webp",
		title: "Barcelona",
		locale: "ca-ES",
		date: new Date("2022-12-27"),
	},
	{
		image: "/fotos/vilanova.webp",
		locale: "ca-ES",
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
