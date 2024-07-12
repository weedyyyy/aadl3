"use client";
import React, { useState } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import { Card } from "antd";
import { Divider, List, Typography } from "antd";
import { Checkbox } from "antd";

const data = [
	" أرح أنني اطلعت ووافقت على شروط وكيفيات الحصول على مسكن في إطار برنامج البيع بالإيجار",
	"  أصرح أنني على علم بالشروط المتعلقة بصيغة البيع بالإيجار المحددة في المرسوم التنفيذي      01-105 المؤرخ في 23 أفريل 2001، والمحدد الشروط وكيفيات امتلاك سكن في إطار برنامج البيع بالإيجار المعدل  ",
	" أصرح أن كل المعلومات والوثائق المقدمة من طرفي هي معلومات صحيحة وصادقة ورسمية (في حالة التصريح الكاذب أتحمل الإجراءات القانونية المعمول بها قانونا).",
];

import { Alert } from "antd";
const { Option } = Select;
const layout = {
	labelCol: {
		span: 12,
	},
	wrapperCol: {
		span: 25,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 0,
		span: 16,
	},
};
const FormPage = () => {
	const [form] = Form.useForm();
	const [showAlert, setShowAlert] = useState(false);

	const onFinish = (values) => {
		console.log(values);
		setShowAlert(true); // Show the alert after successful submission
	};
	const onReset = () => {
		form.resetFields();
	};

	return (
		<div className='flex  items-center justify-between  px-32 gap-16 my-5	'>
			<div className='flex justify-center flex-col'>
				<div className='flex'>
					<Form
						{...layout}
						form={form}
						name='control-hooks'
						onFinish={onFinish}
						style={{
							maxWidth: 600,
						}}>
						<Form.Item
							name='NN'
							label='NN رقم التعريف الوطني '
							rules={[
								{
									required: true,
								},
							]}>
							<Input />
						</Form.Item>
						<Form.Item
							name='NNS'
							label=' NNS رقم الضمان الاجتناعي '
							rules={[
								{
									required: true,
								},
							]}>
							<Input />
						</Form.Item>
						<Form.Item
							name='number'
							label='رقم  الهاتف النقال '
							rules={[
								{
									required: true,
								},
							]}>
							<Input />
						</Form.Item>
						<Form.Item
							name='ولاية الاقامة'
							label='ولاية الاقامة'
							rules={[
								{
									required: true,
								},
							]}>
							<Select
								placeholder='اختر ولابة الاقامة'
								allowClear>
								<option value='adrar'>
									01 : Adrar
								</option>
								<option value='chlef'>
									02 : Chlef
								</option>
								<option value='laghouat'>
									03 : Laghouat
								</option>
								<option value='oum_el_bouaghi'>
									04 : Oum El Bouaghi
								</option>
								<option value='batna'>
									05 : Batna
								</option>
								<option value='bejaia'>
									06 : Béjaïa
								</option>
								<option value='biskra'>
									07 : Biskra
								</option>
								<option value='bechar'>
									08 : Béchar
								</option>
								<option value='blida'>
									09 : Blida
								</option>
								<option value='bouira'>
									10 : Bouira
								</option>
								<option value='tamanrasset'>
									11 : Tamanrasset
								</option>
								<option value='tebessa'>
									12 : Tébessa
								</option>
								<option value='tlemcen'>
									13 : Tlemcen
								</option>
								<option value='tiaret'>
									14 : Tiaret
								</option>
								<option value='tizi_ouzou'>
									15 : Tizi Ouzou
								</option>
								<option value='algiers'>
									16 : Algiers
								</option>
								<option value='djelfa'>
									17 : Djelfa
								</option>
								<option value='jijel'>
									18 : Jijel
								</option>
								<option value='setif'>
									19 : Sétif
								</option>
								<option value='saida'>
									20 : Saïda
								</option>
								<option value='skikda'>
									21 : Skikda
								</option>
								<option value='sidi_bel_abbes'>
									22 : Sidi Bel Abbès
								</option>
								<option value='annaba'>
									23 : Annaba
								</option>
								<option value='guelma'>
									24 : Guelma
								</option>
								<option value='constantine'>
									25 : Constantine
								</option>
								<option value='medea'>
									26 : Médéa
								</option>
								<option value='mostaganem'>
									27 : Mostaganem
								</option>
								<option value='m_sila'>
									28 : M'Sila
								</option>
								<option value='mascara'>
									29 : Mascara
								</option>
								<option value='ouargla'>
									30 : Ouargla
								</option>
								<option value='oran'>
									31 : Oran
								</option>
								<option value='el_bayadh'>
									32 : El Bayadh
								</option>
								<option value='illizi'>
									33 : Illizi
								</option>
								<option value='bordj_bou_arreridj'>
									34 : Bordj Bou Arreridj
								</option>
								<option value='boumerdes'>
									35 : Boumerdès
								</option>
								<option value='el_tarf'>
									36 : El Tarf
								</option>
								<option value='tindouf'>
									37 : Tindouf
								</option>
								<option value='tissemsilt'>
									38 : Tissemsilt
								</option>
								<option value='el_oued'>
									39 : El Oued
								</option>
								<option value='khenchela'>
									40 : Khenchela
								</option>
								<option value='souk_ahras'>
									41 : Souk Ahras
								</option>
								<option value='tipaza'>
									42 : Tipaza
								</option>
								<option value='mila'>
									43 : Mila
								</option>
								<option value='ain_defla'>
									44 : Aïn Defla
								</option>
								<option value='naama'>
									45 : Naâma
								</option>
								<option value='ain_temouchent'>
									46 : Aïn Témouchent
								</option>
								<option value='ghardaia'>
									47 : Ghardaïa
								</option>
								<option value='relizane'>
									48 : Relizane
								</option>
								<option value='timimoun'>
									49 : Timimoun
								</option>
								<option value='bordj_badji_mokhtar'>
									50 : Bordj Badji Mokhtar
								</option>
								<option value='ouled_djellal'>
									51 : Ouled Djellal
								</option>
								<option value='beni_abbes'>
									52 : Beni Abbès
								</option>
								<option value='in_salah'>
									53 : In Salah
								</option>
								<option value='in_guezzam'>
									54 : In Guezzam
								</option>
								<option value='touggourt'>
									55 : Touggourt
								</option>
								<option value='djanet'>
									56 : Djanet
								</option>
								<option value='el_meghaier'>
									57 : El Meghaier
								</option>
								<option value='el_meniaa'>
									58 : El Meniaa
								</option>
							</Select>
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Space>
								<Button
									type='primary'
									htmlType='submit'>
									Submit
								</Button>
								<Button
									htmlType='button'
									onClick={onReset}>
									Reset
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</div>
				<Button
					type='default'
					className='text-sm  hover:bg-primary rounded-3xl border-primary text-primary'>
					{" "}
					الرجاء التحقق من المعلومات
				</Button>
			</div>
			<div className='flex-1 '>
				<>
					<Divider orientation='left'> </Divider>
					<List
						className='bg-slate-100 text-right'
						size='large'
						header={
							<div>
								شروط و كيفيات الحصول على مسكن في
								اطار البيع بالتقسيط
							</div>
						}
						footer={
							<Checkbox required>موافق على شروط</Checkbox>
						}
						bordered
						dataSource={data}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</>
			</div>

			{showAlert && (
				<Alert
					message='لقد تم تسجيل بنجاح'
					type='success'
					closable
					onClose={() => setShowAlert(false)}
					className='fixed bottom-4 right-4 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded ' // Tailwind CSS classes applied inline
				/>
			)}
		</div>
	);
};

export default FormPage;
