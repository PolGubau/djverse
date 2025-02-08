import { type FC, type RefObject, useEffect, useRef, useState } from "react";
import { InfiniteGridMenu, type MenuItem } from "./menu/helpers/grid";
import { defaultItems } from "./menu/data/default";

interface InfiniteMenuProps {
	items?: MenuItem[];
}

const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [] }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(
		null,
	) as RefObject<HTMLCanvasElement>;
	const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
	const [isMoving, setIsMoving] = useState<boolean>(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		let sketch: InfiniteGridMenu | null = null;

		const handleActiveItem = (() => {
			let lastIndex: number | null = null;
			return (index: number) => {
				if (!items.length || lastIndex === index) return;
				lastIndex = index;
				setActiveItem(items[index % items.length]);
			};
		})();

		if (canvas) {
			sketch = new InfiniteGridMenu(
				canvas,
				items.length ? items : defaultItems,
				handleActiveItem,
				setIsMoving,
				(sk) => sk.run(),
			);
		}

		const handleResize = () => sketch?.resize();
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [items]);

	// const handleButtonClick = () => {
	// 	if (!activeItem?.link) return;
	// 	activeItem.link.startsWith("http")
	// 		? window.open(activeItem.link, "_blank")
	// 		: console.log("Internal route:", activeItem.link);
	// };

	return (
		<div className="relative w-full h-full">
			<canvas
				ref={canvasRef}
				className="cursor-grab w-full h-full overflow-hidden relative outline-none active:cursor-grabbing"
			/>

			{activeItem && (
				<>
					<h2
						className={`absolute font-bold text-white text-6xl left-8 md:left-20 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
							isMoving
								? "opacity-0 pointer-events-none -translate-x-4 "
								: "opacity-100"
						}`}
					>
						{activeItem.title}
					</h2>

					<p
						className={`absolute max-w-[12ch] text-2xl text-gray-200 right-8 md:right-20 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
							isMoving
								? "opacity-0 translate-x-4 pointer-events-none"
								: "opacity-100"
						}`}
					>
						{activeItem.date.toLocaleDateString("es-ES", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					{/* <button
						type="button"
						onClick={handleButtonClick}
						className={`absolute left-1/2 bottom-16 w-16 h-16 flex items-center justify-center bg-sky-500 border-2 border-black text-white rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 active:scale-95 ${
							isMoving ? "opacity-0 scale-0" : "opacity-100 scale-100"
						}`}
					>
						<span className="text-2xl">&#x2197;</span>
					</button> */}
				</>
			)}
		</div>
	);
};

export default InfiniteMenu;
