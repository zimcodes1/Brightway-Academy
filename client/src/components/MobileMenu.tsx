import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

const activeClass = "text-indigo-600 font-semibold";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 z-40"
						onClick={onClose}
					/>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "tween" }}
						className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50 p-6"
					>
						<button onClick={onClose} className="absolute top-4 right-4">
							<X className="w-6 h-6 text-gray-600" />
						</button>
						<nav className="flex flex-col gap-6 mt-12">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? activeClass
										: "text-gray-600 hover:text-indigo-600 transition"
								}
							>
								Home
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive
										? activeClass
										: "text-gray-600 hover:text-indigo-600 transition"
								}
							>
								About
							</NavLink>
							<Link
								to="/#programs"
								className="text-gray-600 hover:text-indigo-600 transition"
							>
								Features
							</Link>
							<Link
								to="/#contact"
								className="text-gray-600 hover:text-indigo-600 transition"
							>
								Contact
							</Link>
							<NavLink
								to="/gallery"
								className={({ isActive }) =>
									isActive
										? activeClass
										: "text-gray-600 hover:text-indigo-600 transition"
								}
							>
								Gallery
							</NavLink>
						</nav>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
