import Image from "next/image";
import React from "react";
import { UserRoundPen } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Button } from "antd";
const HomePage = () => {
	return (
		<section className='flex  items-center justify-between flex-grow  px-32 my-16'>
			<div className='flex flex-1'>
				<Image
					src='/logo.svg'
					height={300}
					width={300}
				/>
			</div>
			<div className='flex flex-1 items-center flex-col justify-around gap-4'>
				<Button
					type='default'
					className='text-sm self-end hover:bg-primary rounded-3xl border-primary text-primary'>
					{" "}
					يفتح الموقع من 08:00الى السادسة 18:00 كل
				</Button>

				<h1 className='text-4xl text-primary text-right'>
					مرحبا بكم في المنصة الرقمية الخاصة بالتسجيلات
					{<br></br>}(AADL) في عدل 3
				</h1>
				<p className='text-right text-sm text-gray-500'>
					عدل 3 المنصة الرقمية المتخصصة لتسجيل طلباات السكن عن بعد بكل
					سهولة نوفر لكم واجة مستخم مبسطة تليح لكم تقديم طلباتكم بسرعة
					وبدون تعقيدات لتلبة اتياجاتكم وتحقيق حلم السكن باسرع وقت
				</p>
				<div className='flex gap-2 self-end'>
					<Button
						iconPosition='end'
						icon={<CircleHelp size={16}></CircleHelp>}
						type='default'
						ghost>
						دليل المستخدم
					</Button>
					<Button
						href='/inscription'
						iconPosition='end'
						icon={<UserRoundPen size={16}></UserRoundPen>}
						type='primary'>
						سجل الان
					</Button>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
