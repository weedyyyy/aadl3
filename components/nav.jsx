"use client";
import React from "react";
import { Button, Divider } from "antd";
import { Globe } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
	const pathname = usePathname();
	const hideButtonOnRoutes = ["/inscription"];
	return (
		<div className='flex justify-between items-center px-32 my-4'>
			<div>
				<Button
					className='bg-primary text-white'
					icon={<Globe size={16} />}
					type='primary'>
					English
				</Button>
				<Divider
					orientation='center'
					type='vertical'
					className='ml-5 h-6 rounded-lg border-2'
				/>
				{!hideButtonOnRoutes.includes(pathname) && (
					<Button
						href='/inscription'
						className='font-bold text-primary'
						type='text'>
						ابدا تسجيل
					</Button>
				)}
			</div>
			<div className='flex justify-around items-center gap-4 text-primary'>
				<div className='w-60 leading-4 text-right'>
					الجمهورية الجزائرية الديمقراطية الشعبية وزارة السكن و
					العمران و المدينة الوكالة الوطنية لتحسين السكن و تطويره
				</div>
				<div>
					<Image
						src='/flag.svg' // Path to your SVG file in the public directory
						alt='Logo'
						width={70} // Adjust width as needed
						height={50} // Adjust height as needed
					/>
				</div>
			</div>
		</div>
	);
};

export default Nav;
