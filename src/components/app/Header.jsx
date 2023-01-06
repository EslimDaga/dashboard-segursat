import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { navigation } from "../../routes/routes";
import { Link, NavLink } from "react-router-dom";
import {
	UserCircleIcon,
	UserIcon,
	XMarkIcon,
	Bars3Icon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import LogoMobile from "../../assets/images/app/icon-orange-segursat.png";
import LogoLight from "../../assets/images/app/logo.png";

const Header = () => {
	return (
		<Popover className="relative bg-white-primary">
			<div className="mx-auto w-full px-6 shadow-xl">
				<div className="flex items-center justify-between border-gray-100 py-4 md:justify-between md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#">
							<span className="sr-only">Segursat SAC</span>
							<img
								className="h-6 w-auto sm:h-8"
								src={LogoLight}
								alt="logo-segursat"
							/>
						</a>
					</div>
					<div className="-my-2 -mr-2 md:hidden">
						<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group
						as="nav"
						className="hidden space-x-6 md:flex md:items-center"
					>
						{navigation.map(
							item =>
								item.accessBy === "authenticated" && (
									<NavLink
										to={item.href}
										key={item.id}
										className={({ isActive }) =>
											isActive
												? "flex items-center text-base font-bold text-white-primary hover:text-white-tertiary cursor-pointer bg-segursat-primary px-3 py-3 rounded-lg"
												: "flex items-center text-base font-bold text-dark-mode-primary hover:text-dark-mode-tertiary cursor-pointer"
										}
									>
										{item.icon}
										<h3 className="mt-[1px]">{item.name}</h3>
									</NavLink>
								)
						)}
						<Popover className="flex items-center">
							<>
								<Popover.Button className="focus:outline-none">
									<UserCircleIcon className="h-10 w-10 text-dark-mode-primary hover:text-dark-mode-tertiary" />
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute z-10 w-72 px-6 mt-12 right-0 top-5">
										<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative grid gap-1 bg-white-primary">
												<Link
													to="/profile"
													className="-m-0 w-full flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
												>
													<div className="p-2 mr-3">
														<UserIcon className="h-6 w-6 text-dark-mode-primary" />
													</div>
													<p className="text-base font-bold text-gray-900">
														Mi perfil
													</p>
												</Link>
												<a
													onClick={() => {
														console.log("logout");
													}}
													className="-m-0 w-full flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer"
												>
													<div className="p-2 mr-3">
														<ArrowLeftOnRectangleIcon className="h-6 w-6 text-dark-mode-primary" />
													</div>
													<p className="text-base font-bold text-gray-900">
														Cerrar Sesión
													</p>
												</a>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						</Popover>
					</Popover.Group>
				</div>
			</div>
			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
				>
					<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src={LogoMobile}
										alt="logo-segursat"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-inset">
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{navigation.map(
										item =>
											item.accessBy === "authenticated" && (
												<NavLink
													key={item.id}
													to={item.href}
													className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
												>
													{item.icon}
													<span className="ml-3 text-base font-medium text-gray-900">
														{item.name}
													</span>
												</NavLink>
											)
									)}
								</nav>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Header;
