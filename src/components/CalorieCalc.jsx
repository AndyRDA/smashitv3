import { render, style } from "solid-js/web";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

function CalorieCalc() {
	const [details, setDetails] = createStore({
		age: null,
		height: null,
		mass: null,
		fat: null,
		sex: null,
	});

	const [results, setResults] = createStore({
		baseCalories: 0,
		adjustedCalories: 0,
		lifestyleIndex: 0,
		phaseIndex: 0,
		carbIndex: 0,
	});

	const [macronutrients, setMacronutrients] = createStore({
		carbs: 0,
		protein: 0,
		fat: 0,
	});



	const [showResults, setShowResults] = createSignal(true);

	const lifestyleOptions = [
		"sedentary",
		"light",
		"moderate",
		"heavy",
		"athlete",
	];
	const lifestyleDescription = [
		"not much / none",
		"about once a week",
		"two or three times a week",
		"most days",
		"once or more every day",
	];
	const phaseOptions = ["cut", "maintain", "bulk"];
	const phaseDescription = ["reduce my fat", "stay the same", "gain muscle mass"];
	const numberOfOptions = lifestyleOptions.length;
	const longestLifestyleOption = [...lifestyleOptions].sort(function (a, b) {
		return b.length - a.length;
	})[0].length;
	const carbOptions = ["Low", "Moderate", "High"];
	const macroPercentages = [
		{ protein: 0.4, carb: 0.2, fat: 0.4 },
		{ protein: 0.3, carb: 0.35, fat: 0.35 },
		{ protein: 0.3, carb: 0.5, fat: 0.2 },
	];

	const lifestyleAdjustmentFactor = [1.2, 1.375, 1.55, 1.725, 1.9];
	const phaseAdjustmentFactor = [-500, 0, 500];

	lifestyleOptions.length === lifestyleAdjustmentFactor.length
		? null
		: console.error("Lifestyle options and factors do not match length");


	const updateDetails = (e) => {
		setDetails(e.target.placeholder, e.target.value);
	};

	const calculateCalories = () => {
		if (
			details.age > 0 &&
			details.mass > 0 &&
			details.height > 0 &&
			details.sex !== null
		) {
			function mifflinCalorieFormula() {
				let sexFactor = details.sex === "male" ? 5 : -151;
				let basalMetabolicRate =
					10 * details.mass +
					6.25 * details.height -
					5 * details.age +
					sexFactor;
				return basalMetabolicRate;
			}

			function katchCalorieFormula() {
				let basalMetabolicRate =
					370 + 21.6 * (details.mass * (1 - details.fat / 100));
				return basalMetabolicRate;
			}

			let maintenanceCalories =
				details.fat > 0 ? katchCalorieFormula() : mifflinCalorieFormula();
			setResults("baseCalories", maintenanceCalories);
			adjustCalories();
			calculateMacronutrients();
		}
	};

	const adjustCalories = () => {
		let adjustedCalories = Math.round(
			results.baseCalories * lifestyleAdjustmentFactor[results.lifestyleIndex] +
				phaseAdjustmentFactor[results.phaseIndex]
		);
		setResults("adjustedCalories", adjustedCalories);
	};

	const calculateMacronutrients = () => {
		let protein = Math.round(
			(macroPercentages[results.carbIndex].protein * results.adjustedCalories) /
				4
		);
		let carbs = Math.round(
			(macroPercentages[results.carbIndex].carb * results.adjustedCalories) / 4
		);
		let fat = Math.round(
			(macroPercentages[results.carbIndex].fat * results.adjustedCalories) / 9
		);
		setMacronutrients({
			protein: protein,
			fat: fat,
			carbs: carbs,
		});
		setShowResults(true);
	};

	const handleLifestyleChange = (e) => {
		let direction = e.target.value === "1" ? 1 : -1;
		let newIndex = results.lifestyleIndex + direction;
		if (newIndex === lifestyleOptions.length) {
			setResults(e.target.name, 0);
		} else if (newIndex === -1) {
			setResults(e.target.name, lifestyleOptions.length - 1);
		} else {
			setResults(e.target.name, newIndex);
		}
		adjustCalories();
		calculateMacronutrients();
	};

	const handlePhaseChange = (e) => {
		let direction = e.target.value === "1" ? 1 : -1;
		let newIndex = results.phaseIndex + direction;
		if (newIndex === phaseOptions.length) {
			setResults(e.target.name, 0);
		} else if (newIndex === -1) {
			setResults(e.target.name, phaseOptions.length - 1);
		} else {
			setResults(e.target.name, newIndex);
		}
		adjustCalories();
		calculateMacronutrients();
	};
	const handleCarbChange = (e) => {
		let direction = e.target.value === "1" ? 1 : -1;
		let newIndex = results.carbIndex + direction;
		if (newIndex === carbOptions.length) {
			setResults(e.target.name, 0);
		} else if (newIndex === -1) {
			setResults(e.target.name, carbOptions.length - 1);
		} else {
			setResults(e.target.name, newIndex);
		}
		calculateMacronutrients();
    
	};
  	

	return (
	<>
		<div class="calc_wrapper" data-show-results={showResults()}>
			<form data-show-results={showResults()}>
				<div class="form_inputs" >
					<fieldset class="age_fieldset">
						<label for="age" data-show-results={showResults()}>
							<svg
								width="50"
								height="50"
								viewBox="0 0 50 50"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.25 0.75V4.5H6.375C3.29051 4.5 0.75 7.04051 0.75 10.125V43.875C0.75 46.9595 3.29051 49.5 6.375 49.5H43.875C46.9595 49.5 49.5 46.9595 49.5 43.875V10.125C49.5 7.04051 46.9595 4.5 43.875 4.5H42V0.75H38.25V4.5H12V0.75H8.25ZM6.375 8.25H8.25V12H12V8.25H38.25V12H42V8.25H43.875C44.9305 8.25 45.75 9.06949 45.75 10.125V15.75H4.5V10.125C4.5 9.06949 5.31949 8.25 6.375 8.25ZM4.5 19.5H45.75V43.875C45.75 44.9305 44.9305 45.75 43.875 45.75H6.375C5.31949 45.75 4.5 44.9305 4.5 43.875V19.5ZM15.75 23.25V27H19.5V23.25H15.75ZM23.25 23.25V27H27V23.25H23.25ZM30.75 23.25V27H34.5V23.25H30.75ZM38.25 23.25V27H42V23.25H38.25ZM8.25 30.75V34.5H12V30.75H8.25ZM15.75 30.75V34.5H19.5V30.75H15.75ZM23.25 30.75V34.5H27V30.75H23.25ZM30.75 30.75V34.5H34.5V30.75H30.75ZM38.25 30.75V34.5H42V30.75H38.25ZM8.25 38.25V42H12V38.25H8.25ZM15.75 38.25V42H19.5V38.25H15.75ZM23.25 38.25V42H27V38.25H23.25Z"
									fill="#20D0EE"
								/>
							</svg>
							<input
							name="age"
							id="age"
							type="number"
							required
							onBlur={updateDetails}
							placeholder="age"
							>
							{details.age}
							</input>
						</label>
					</fieldset>

						<fieldset class="height_fieldset">
							<label for="height" data-show-results={showResults()}>
								<svg
									width="50"
                                    height="50"
									viewBox="0 0 61 72"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.0568 1.34174C11.9592 1.56939 11.9267 17.3418 11.9592 36.3987L12.0568 71.0328L36.5446 71.1304L60.9999 71.1954V70.3824V69.5694H51.1787C41.3576 69.5694 41.3251 69.5694 42.3332 68.9515C42.8861 68.5938 43.5039 67.8458 43.7316 67.2605C43.9592 66.545 44.0893 61.2442 44.1218 50.2523V34.2849L45.7153 37.3743C47.3413 40.6263 48.317 41.5044 49.7478 41.0816C50.9511 40.7239 51.8942 39.6182 51.8942 38.545C51.8942 37.9271 50.3983 34.4475 47.9267 29.3092L43.9592 21.1141H36.5446H29.13L25.2275 29.0816C23.1137 33.4718 21.26 37.3743 21.1625 37.732C20.6421 39.358 22.756 41.5694 24.3495 41.0816C25.5852 40.7239 26.2356 39.9109 27.4389 37.2117L28.6422 34.6101L28.8048 51.1629L28.9674 67.6832L30.1056 68.6263L31.2113 69.5694H22.3657H13.5202L13.4552 35.358C13.3576 3.03281 13.3251 1.11411 12.7722 1.01654C12.4795 0.9515 12.1543 1.08158 12.0568 1.34174ZM36.9348 56.0735C36.9348 67.6507 36.9999 68.0735 38.821 69.0491C39.634 69.5044 39.5365 69.5369 36.6096 69.5694H33.5202L34.4308 68.8214C34.9186 68.4312 35.4714 67.5857 35.634 66.9678C35.8291 66.3499 35.9592 61.3418 35.9592 55.6832C35.9592 46.8377 36.0243 45.5044 36.447 45.5044C36.8698 45.5044 36.9348 46.9027 36.9348 56.0735Z"
										fill="#20D0EE"
									/>
									<path
										d="M33.8455 8.3011C31.6667 9.43931 30.4309 11.423 30.4309 13.797C30.4309 15.7483 31.0488 17.1466 32.4797 18.4149C34.7561 20.3987 37.748 20.5613 40.1545 18.8052C44.9675 15.3255 42.561 7.78077 36.6098 7.78077C35.6342 7.78077 34.3984 8.00842 33.8455 8.3011Z"
										fill="#20D0EE"
									/>
									<path
										d="M10.1599 69.8133H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 48.3228H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 26.8323H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 62.4149H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 40.9244H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 19.4339H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 55.3688H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 33.8784H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 12.3878H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M10.1599 5.34174H1"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 65.938H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 51.4935H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 37.4014H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 22.9569H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 8.86481H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 58.8919H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 44.4474H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 30.3553H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 15.9108H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M9.98364 1.81873H5.22754"
										stroke="#20D0EE"
										stroke-width="2"
										stroke-linecap="round"
									/>
								</svg>
					<input
					name="height"
					id="height"
					type="number"
					required
					onBlur={updateDetails}
					placeholder="height"
					>
					{details.height}
					</input>
				</label>
						</fieldset>

						<fieldset class="mass_fieldset">
							<label for="mass" data-show-results={showResults()}>
								<svg
                                width="50"
								height="50"
									viewBox="0 0 60 56"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.73325 7.2002C1.69754 6.96215 1.84149 6.73227 2.0668 6.65965C12.6979 3.2335 21.1353 1.5171 29.6416 1.50013C38.1496 1.48316 46.824 3.1661 57.9274 6.66892C58.1555 6.74086 58.3009 6.97274 58.2651 7.21095L51.2721 53.8313C51.2354 54.076 51.0251 54.2571 50.7776 54.2571H9.22237C8.97488 54.2571 8.76462 54.076 8.72791 53.8313L1.73325 7.2002Z"
										stroke="#20D0EE"
										stroke-width="3"
									/>
									<path
										d="M11.9578 10.8659C11.8855 10.6066 12.0337 10.3496 12.2698 10.2759C18.93 8.19745 24.2114 7.23043 29.5756 7.25764C34.9504 7.2849 40.4958 8.31048 47.6913 10.328C47.9427 10.3985 48.0981 10.6655 48.0246 10.9291L44.1585 24.7968C44.0817 25.0721 43.7609 25.259 43.438 25.1372C38.4066 23.2386 34.1871 22.2695 29.9324 22.2811C25.6788 22.2926 21.5026 23.2842 16.5595 25.1426C16.2393 25.263 15.92 25.078 15.8431 24.8023L11.9578 10.8659Z"
										stroke="#20D0EE"
										stroke-width="3"
									/>
									<path
										d="M30 10.7571L32.1651 22.0071H27.8349L30 10.7571Z"
										fill="#20D0EE"
									/>
								</svg>
					<input
					name="mass"
					id="mass"
					type="number"
					required
					onBlur={updateDetails}
					placeholder="mass"
					>
					{details.mass}
					</input>
				</label>
						</fieldset>

						<fieldset class="fat_fieldset">
							<label for="fat" data-show-results={showResults()}>
								<svg
									width="50"
                                    height="50"
									viewBox="0 0 60 67"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.6575 0.27459C26.7722 0.567825 25.9473 0.962173 24.891 1.54865C24.559 1.74076 24.1566 1.9531 23.9856 2.034C23.8247 2.125 23.3921 2.36768 23.0299 2.60024C22.6678 2.8227 22.195 3.10582 21.9736 3.21705C21.7523 3.32827 21.37 3.55073 21.1185 3.72263C20.867 3.88441 20.5049 4.09675 20.3138 4.19787C20.1226 4.29898 19.7806 4.4911 19.5593 4.64278C19.3379 4.78434 18.9054 5.04724 18.6036 5.20902C16.5614 6.34152 16.1188 6.60442 15.9377 6.75609C15.827 6.8471 15.6661 6.95832 15.5856 6.99877C15.5051 7.03922 15.1631 7.23133 14.8311 7.42345C14.4991 7.61557 14.0364 7.85825 13.8151 7.96947C13.5837 8.0807 13.3423 8.24249 13.2718 8.32338C13.2014 8.40427 13.0908 8.47505 13.0304 8.47505C12.9298 8.47505 12.6381 8.64695 11.9741 9.11208C11.8333 9.20308 11.4912 9.40532 11.2096 9.53677C10.9379 9.67833 10.2539 10.0727 9.70057 10.3962C8.48333 11.1243 6.96429 11.9939 6.44117 12.2669C6.21985 12.3781 5.96836 12.5399 5.86776 12.6309C5.67662 12.8028 5.33458 12.9949 4.74105 13.278C3.75518 13.7533 2.3971 14.906 1.82368 15.7756C1.64261 16.0284 1.44141 16.3014 1.37099 16.3823C1.30057 16.4531 1.14967 16.6957 1.03901 16.9182C0.928355 17.1407 0.757336 17.4541 0.676857 17.626C0.586318 17.7878 0.40524 18.2428 0.274462 18.6372L0.0430845 19.345L0.0129049 33.4C-0.0172748 47.1416 -0.0072149 47.4652 0.183923 48.0618C0.294582 48.3954 0.43542 48.8707 0.495779 49.1235C0.566199 49.3763 0.676857 49.6493 0.747277 49.7302C0.817696 49.8111 0.948474 50.0436 1.03901 50.2357C1.66273 51.5806 2.87997 52.8445 4.44931 53.795C4.98249 54.1186 5.4553 54.3815 5.51566 54.3815C5.57602 54.3815 5.71686 54.4725 5.81746 54.5736C5.92812 54.6848 6.20979 54.8668 6.45123 54.9781C6.68261 55.0893 7.02464 55.2713 7.1856 55.3825C7.93003 55.8477 8.72477 56.3128 9.10704 56.5049C9.55974 56.7172 10.5858 57.3341 10.787 57.4958C10.8575 57.5565 11.0285 57.6273 11.1794 57.6677C11.3303 57.7082 11.5214 57.8194 11.622 57.9306C11.7126 58.0317 11.8534 58.1228 11.9137 58.1228C11.9842 58.1228 12.1652 58.2239 12.3262 58.3553C12.5978 58.5677 12.8594 58.7193 13.8251 59.2249C14.0464 59.3463 14.479 59.599 14.7808 59.7912C15.2939 60.1147 15.4749 60.2057 16.0383 60.4585C16.149 60.5091 16.4508 60.7012 16.7023 60.8933C16.9538 61.0753 17.5473 61.4393 18.0201 61.6921C18.4929 61.9449 19.1166 62.3089 19.4184 62.4909C19.7202 62.6831 20.1327 62.9156 20.3339 63.0066C20.5351 63.1077 20.7363 63.2291 20.7664 63.2796C20.8067 63.3403 20.9978 63.4718 21.199 63.5729C22.0038 63.9875 22.3559 64.1897 22.5169 64.3312C22.6074 64.4121 22.8589 64.5537 23.0702 64.6447C23.2814 64.7357 23.543 64.8975 23.6536 64.9986C23.7643 65.0997 24.1868 65.3525 24.5791 65.5547C24.9715 65.757 25.6354 66.1109 26.0479 66.3333L26.8024 66.7378L30.0014 66.7277C33.4721 66.7075 33.291 66.7378 34.3976 66.1008C34.5887 65.9895 34.9811 65.7873 35.2527 65.6457C35.5344 65.5042 36.148 65.1604 36.6309 64.8672C37.8481 64.1391 38.8843 63.5122 39.4778 63.1482C39.7595 62.9763 40.172 62.7336 40.4033 62.6123C40.6347 62.4909 40.9566 62.2988 41.1277 62.1775C41.2886 62.0561 41.5804 61.8944 41.7614 61.8135C41.9425 61.7225 42.1638 61.6213 42.2443 61.5607C42.7171 61.2674 44.3569 60.3068 45.1617 59.8518C45.4132 59.7204 45.6345 59.5687 45.6647 59.5283C45.6948 59.4979 45.9463 59.3463 46.218 59.1946C46.4996 59.0429 46.8819 58.8306 47.073 58.7092C47.2642 58.598 47.6766 58.3654 47.9784 58.2036C48.2802 58.0419 48.8033 57.7486 49.1353 57.5565C49.4673 57.3745 49.8798 57.152 50.0508 57.0712C50.2218 56.9903 50.4029 56.879 50.4331 56.8184C50.4733 56.7577 50.6946 56.6161 50.936 56.5049C51.1674 56.4038 51.429 56.242 51.4994 56.151C51.5698 56.0701 51.6805 55.9993 51.7408 55.9993C51.8716 55.9993 53.7428 54.8972 54.1451 54.5837C54.296 54.4624 54.6984 54.2197 55.0505 54.0478C57.4347 52.8546 59.0141 50.9537 59.7686 48.3651L60 47.5562V33.4506V19.345L59.7787 18.9102C59.6479 18.6776 59.5473 18.3945 59.5473 18.2833C59.5473 18.172 59.4165 17.8181 59.2455 17.4946C59.0846 17.1609 58.9437 16.8373 58.9437 16.7766C58.9437 16.6452 58.0786 15.5228 57.6661 15.1285C57.5152 14.9768 57.304 14.7745 57.2134 14.6734C56.8714 14.3094 55.4529 13.3387 54.7085 12.9646C54.4369 12.823 54.1954 12.6713 54.1653 12.6208C54.1351 12.5702 53.9138 12.4287 53.6824 12.3174C53.1392 12.0444 52.6965 11.7916 52.3344 11.549C52.1835 11.4478 51.8917 11.276 51.7006 11.1748C51.5095 11.0737 51.1272 10.8614 50.8455 10.6996C50.5739 10.5378 50.2319 10.3457 50.091 10.2749C49.5578 9.99179 48.8235 9.54688 48.6323 9.38509C48.5217 9.28398 48.2601 9.15253 48.0589 9.08175C47.8477 9.02108 47.6766 8.93007 47.6766 8.87952C47.6766 8.82896 47.2843 8.57617 46.8115 8.30316C46.3286 8.04026 45.725 7.69646 45.4735 7.53468C45.222 7.38301 44.7895 7.14033 44.5078 6.99877C44.2362 6.86732 43.7533 6.59431 43.4515 6.40219C42.8881 6.04828 42.3147 5.73483 41.5703 5.35059C41.3389 5.23936 41.1176 5.0978 41.0874 5.03713C41.0572 4.97646 40.856 4.85512 40.6548 4.75401C40.2424 4.54166 39.6891 4.2282 38.7736 3.68218C38.4417 3.49006 37.989 3.22716 37.7677 3.11593C37.5463 3.00471 37.1641 2.77214 36.9126 2.61036C36.6611 2.44857 36.3895 2.27667 36.309 2.24634C36.2285 2.20589 36.0474 2.09467 35.9066 2.00366C35.6853 1.84188 35.1823 1.56886 34.2467 1.06329C33.4117 0.618378 32.8685 0.385818 32.6673 0.385818C32.5365 0.385818 32.3051 0.304924 32.1341 0.213921C31.8927 0.0723572 31.5104 0.0319138 30.1724 0.0116882C28.5729 -0.0186462 28.4824 -0.00853729 27.6575 0.27459ZM30.9772 2.09467C31.953 2.20589 32.8886 2.60024 34.4479 3.58106C34.9509 3.89452 35.4539 4.18776 35.5847 4.23832C35.7154 4.28887 35.9669 4.44054 36.148 4.58211C36.3291 4.72367 36.5102 4.8349 36.5504 4.8349C36.6007 4.8349 36.7617 4.9259 36.9226 5.03713C37.0735 5.15847 37.3552 5.30003 37.5262 5.36069C37.7073 5.42137 38.1298 5.66404 38.4618 5.89661C38.995 6.27074 39.498 6.56397 40.5542 7.16055C40.7051 7.24144 41.3188 7.59535 41.9224 7.93914C42.526 8.29305 43.0491 8.57617 43.0893 8.57617C43.1296 8.57617 43.3107 8.6874 43.4817 8.81885C43.6627 8.96041 43.9142 9.12219 44.0551 9.18286C44.1959 9.24353 44.5581 9.44576 44.8599 9.63788C45.1617 9.81989 45.5942 10.0727 45.8156 10.1839C46.0369 10.3052 46.4192 10.5277 46.6707 10.6996C46.9221 10.8614 47.3547 11.1142 47.6263 11.2658C47.908 11.4175 48.3708 11.6905 48.6625 11.8725C48.9542 12.0647 49.2259 12.2163 49.2762 12.2163C49.3164 12.2163 49.5377 12.3377 49.749 12.4995C49.9602 12.6511 50.3023 12.8534 50.4934 12.9545C50.9159 13.1769 51.8314 13.6926 52.4148 14.0364C52.6462 14.178 53.0486 14.4105 53.3001 14.5622C53.5516 14.7139 53.944 14.9262 54.1753 15.0374C54.3966 15.1487 54.789 15.4318 55.0405 15.6543C55.292 15.8767 55.5435 16.0587 55.6038 16.0587C55.7447 16.0587 56.7607 17.262 56.9519 17.6766C57.0525 17.8687 57.2637 18.263 57.4247 18.5462C57.6058 18.8596 57.7566 19.3349 57.8271 19.7798C57.9578 20.6595 57.978 46.8383 57.8371 47.4551C57.6259 48.446 56.8814 49.9627 56.4992 50.2054C56.4287 50.256 56.2577 50.4582 56.1068 50.6604C55.7849 51.0851 54.7487 51.9042 54.2256 52.1468C53.8635 52.3086 53.5013 52.5311 53.0084 52.8647C52.8675 52.9558 52.3746 53.2389 51.9018 53.4816C51.429 53.7242 50.8455 54.0781 50.6041 54.2601C50.3526 54.4523 49.9502 54.7051 49.6987 54.8365C48.7732 55.3016 48.24 55.5949 48.0891 55.7263C47.9986 55.7971 47.7672 55.9387 47.576 56.0297C47.2441 56.2016 46.5298 56.5959 45.9665 56.9195C45.8256 57.0004 45.4936 57.2127 45.222 57.3947C44.9404 57.5767 44.6788 57.7183 44.6184 57.7183C44.5681 57.7183 44.4474 57.779 44.3669 57.8599C44.2764 57.9306 43.8036 58.2138 43.3107 58.4767C42.8177 58.7294 42.355 59.0126 42.2745 59.0935C42.194 59.1744 42.0934 59.235 42.0431 59.235C41.9928 59.235 41.8922 59.2957 41.8218 59.3766C41.7413 59.4474 41.4999 59.6092 41.2786 59.7305C40.3229 60.2563 39.1459 60.9237 38.8742 61.0955C38.1097 61.591 37.8381 61.7427 37.4156 61.9449C37.1641 62.0663 36.5605 62.4202 36.0575 62.7235C35.5645 63.0269 35.0213 63.3504 34.8503 63.4212C34.6893 63.5021 34.2467 63.7549 33.8644 63.9773C32.2951 64.9379 31.44 65.2008 29.8706 65.2008C28.915 65.1907 28.3013 65.0795 27.7078 64.8065C27.4865 64.6953 27.1444 64.5436 26.9533 64.4526C26.7621 64.3616 26.3899 64.1695 26.1284 64.0178C25.8668 63.856 25.3135 63.5425 24.9011 63.31C24.4886 63.0673 24.1164 62.8246 24.0862 62.7741C24.046 62.7134 23.7844 62.5516 23.5027 62.4101C23.211 62.2786 22.7583 62.0359 22.4766 61.8741C22.205 61.7124 21.7724 61.4596 21.5209 61.3079C21.2694 61.1663 20.857 60.9237 20.5954 60.772C19.7102 60.2563 19.1569 59.9226 18.7243 59.6294C18.4929 59.4676 18.1509 59.2654 17.9698 59.1845C17.7988 59.1036 17.4266 58.9013 17.1449 58.7396C16.8733 58.5677 16.1892 58.1834 15.6359 57.87C15.0826 57.5565 14.4991 57.2228 14.3281 57.1217C14.1672 57.0206 13.7547 56.7779 13.4227 56.5858C13.0908 56.3836 12.4469 56.0094 11.9942 55.7364C11.5315 55.4634 10.9178 55.0994 10.616 54.9376C10.0426 54.614 9.40884 54.25 8.59399 53.7748C8.32237 53.613 7.95015 53.4108 7.77914 53.3299C7.60812 53.249 7.1353 52.9558 6.72285 52.6827C6.31039 52.4198 5.7571 52.0659 5.47542 51.9042C4.52979 51.3581 3.5238 50.4582 3.24213 49.8818C3.15159 49.7201 3.01075 49.4875 2.91015 49.3763C2.80955 49.265 2.67877 48.9718 2.60836 48.7291C2.548 48.4864 2.42728 48.1831 2.3468 48.0618C2.26632 47.9404 2.17578 47.4652 2.13554 46.9899C2.08524 46.5248 2.07518 40.0838 2.10536 32.6922L2.15566 19.2439L2.63854 18.3237C3.09123 17.4844 4.01674 16.3519 4.67063 15.8565C5.34464 15.3408 6.01866 14.9262 6.88381 14.4813C7.588 14.1274 8.01051 13.8847 8.18153 13.7432C8.35255 13.6016 8.97626 13.2477 9.65028 12.914C9.90177 12.7927 10.3947 12.4893 10.7468 12.2568C11.0989 12.0141 11.4309 11.8119 11.4912 11.8119C11.5516 11.8119 11.6924 11.731 11.8031 11.6299C11.9238 11.5186 12.4268 11.2153 12.9197 10.9322C13.4227 10.649 14.2376 10.1839 14.7305 9.89067C15.2335 9.59743 16.159 9.06152 16.7928 8.69751C17.4266 8.34361 18.342 7.80769 18.8249 7.51446C19.3078 7.22122 19.8007 6.94821 19.9315 6.90776C20.0623 6.86732 20.2534 6.75609 20.3641 6.66508C20.5552 6.49319 21.2795 6.05839 21.8227 5.76516C21.9636 5.69438 22.3056 5.50226 22.5772 5.34047C22.8589 5.16858 23.2613 4.94612 23.4826 4.8349C23.7039 4.72367 24.0661 4.4911 24.2874 4.32932C24.5087 4.15742 24.891 3.91475 25.1425 3.78329C25.394 3.65184 25.8869 3.37883 26.2491 3.1766C26.6112 2.98448 27.0639 2.74181 27.2551 2.66091C27.4462 2.56991 27.748 2.42834 27.909 2.34746C28.4623 2.06433 29.7197 1.96322 30.9772 2.09467Z"
										fill="#20D0EE"
									/>
									<path
										d="M28.3115 13.187C27.9896 13.3387 27.4765 13.6016 27.1949 13.7836C26.3398 14.3296 25.3137 15.4723 25.1829 16.0183C25.1426 16.1801 25.0018 16.5137 24.871 16.7564C24.6598 17.171 24.6396 17.3227 24.6396 18.7383C24.6396 20.2651 24.6396 20.2955 24.9414 20.8617C25.1125 21.1752 25.2432 21.4987 25.2432 21.5695C25.2432 21.7515 26.2291 22.9447 26.712 23.339C26.8126 23.4199 27.0339 23.5615 27.1949 23.6424C27.3659 23.7233 27.6174 23.8648 27.7582 23.966C27.8991 24.057 28.4926 24.2491 29.0761 24.3906C30.2028 24.6636 30.3235 24.6636 31.6413 24.3401C32.1443 24.2187 33.3113 23.6424 33.5527 23.3896C33.6332 23.3188 33.774 23.2278 33.8746 23.1874C33.9652 23.157 34.1865 22.9447 34.3474 22.7121C34.5185 22.4796 34.78 22.1155 34.941 21.8931C35.2025 21.5291 35.3434 21.2257 35.7759 20.0528C36.0073 19.4259 35.9168 17.5552 35.625 16.9991C35.5043 16.7665 35.4037 16.4935 35.4037 16.3924C35.4037 16.1194 34.448 14.7038 34.0155 14.3499C33.2811 13.7331 32.8586 13.4297 32.7278 13.4297C32.6574 13.4297 32.3455 13.3185 32.0437 13.1769C31.5407 12.9444 31.3697 12.9241 30.2028 12.9241C29.0459 12.9343 28.8547 12.9545 28.3115 13.187Z"
										fill="#20D0EE"
									/>
									<path
										d="M21.3196 25.8769C21.0178 25.9275 20.6355 26.0387 20.4645 26.1095C20.3035 26.1904 20.0017 26.3218 19.8106 26.4129C18.8952 26.8274 18.1205 27.4139 17.3258 28.3037C16.9737 28.688 16.692 29.0621 16.692 29.1227C16.692 29.1834 16.5914 29.3755 16.4607 29.5474C16.3299 29.7193 16.0683 30.2957 15.8772 30.8215L15.5352 31.7821V41.9037V52.0153L15.8168 52.44C15.9677 52.6725 16.0884 52.895 16.0884 52.9456C16.0884 52.9961 16.3701 53.2085 16.7222 53.4309C17.3158 53.7949 17.3862 53.8151 18.2211 53.8253C18.9455 53.8253 19.1366 53.7949 19.378 53.6129C19.5289 53.5017 19.8005 53.3298 19.9816 53.2388C20.1526 53.1478 20.3337 52.9759 20.3639 52.8546C20.4041 52.7332 20.545 52.4804 20.6758 52.2883L20.9172 51.9243V43.7542C20.9172 38.6883 20.9574 35.493 21.0178 35.3312C21.1285 35.0178 21.219 35.0077 21.5107 35.2402L21.722 35.4222V43.6126C21.722 50.2357 21.7421 56.4745 21.7622 59.1439C21.7622 59.4675 21.8125 59.5484 22.225 59.8012C22.728 60.1248 23.4724 60.5393 24.0961 60.8528C24.3275 60.964 24.5689 61.1258 24.6394 61.2067C24.7098 61.2876 24.8104 61.3584 24.8607 61.3584C24.921 61.3584 25.1021 61.4595 25.2731 61.5808C25.4542 61.7123 25.756 61.8943 25.9471 61.9853C26.1383 62.0864 26.591 62.3493 26.9431 62.5717C27.2851 62.7942 27.6271 62.9762 27.6875 62.9762C27.7378 62.9762 28.0195 63.0874 28.3012 63.2189C28.8846 63.4919 29.1361 63.5425 29.3977 63.4312C29.5586 63.3604 29.5687 63.0065 29.5687 57.9305C29.5687 54.9476 29.5989 52.4096 29.6291 52.2883C29.7598 51.8131 30.6552 51.7524 30.8564 52.2074C30.9368 52.3692 30.967 54.1589 30.967 57.6778C30.967 62.5819 30.9771 62.9257 31.1481 63.1481C31.3292 63.3807 31.3292 63.3807 31.8322 63.1987C32.1138 63.1077 32.647 62.8448 33.0192 62.6223C33.4015 62.3999 33.824 62.1471 33.9749 62.0662C34.1258 61.9853 34.4276 61.8033 34.6489 61.6718C35.3733 61.2269 35.6449 61.0651 36.1076 60.8022C36.3591 60.6607 36.7917 60.4079 37.0633 60.2461C37.345 60.0843 37.677 59.9023 37.8178 59.8315C37.9586 59.7607 38.2504 59.5383 38.4616 59.3462L38.854 59.0024L38.9043 47.3235C38.9244 40.8521 38.9847 35.5335 39.035 35.402C39.1256 35.1492 39.3871 34.9976 39.5079 35.1189C39.5481 35.1492 39.5984 38.9714 39.6286 43.5924L39.6789 52.0052L39.9606 52.4299C40.1115 52.6725 40.2322 52.9051 40.2322 52.9557C40.2322 53.0062 40.5139 53.2186 40.8659 53.4309C41.4192 53.7747 41.5701 53.8151 42.2945 53.8556C43.0389 53.8859 43.1294 53.8758 43.4916 53.623C43.7129 53.4714 43.9845 53.3096 44.1052 53.2691C44.236 53.2186 44.4674 52.895 44.6887 52.44L45.0609 51.6917L45.0307 41.6408L45.0106 31.5799L44.7893 31.1451C44.6585 30.9125 44.5579 30.6698 44.5579 30.6091C44.5579 30.5485 44.3064 30.0429 43.9946 29.4868C43.4111 28.4554 42.6063 27.5049 42.1234 27.3027C41.9625 27.242 41.8418 27.1409 41.8418 27.0802C41.8418 27.0195 41.6506 26.8881 41.4192 26.7769C41.1778 26.6656 40.9162 26.5342 40.8358 26.4735C40.7553 26.423 40.3931 26.2511 40.031 26.0994L39.3771 25.8163L30.625 25.8062C25.7258 25.796 21.6314 25.8264 21.3196 25.8769ZM27.6875 31.6506C28.6633 32.136 29.0355 33.5213 28.9349 36.3525C28.8846 37.8895 28.8846 37.8895 28.5023 38.7085C28.1201 39.4972 28.1 39.5275 27.5567 39.7298C27.1141 39.9017 26.8626 39.932 26.2691 39.8915C25.2631 39.8107 24.9814 39.6286 24.4985 38.7186L24.1162 37.9805L24.0961 35.6851L24.0861 33.3999L24.4885 32.6011C24.8707 31.8529 24.921 31.7922 25.4441 31.5697C26.1483 31.2765 26.9833 31.2967 27.6875 31.6506ZM33.3009 31.7416C33.4317 31.8731 33.482 32.0147 33.4418 32.1158C33.4015 32.2068 33.321 32.4899 33.2707 32.7427C33.2104 32.9955 33.0595 33.3797 32.9388 33.6022C32.818 33.8246 32.6772 34.1381 32.647 34.31C32.5665 34.674 32.1541 35.7256 31.8221 36.4334C31.6913 36.7165 31.5807 37.0401 31.5807 37.1513C31.5807 37.2727 31.5002 37.4749 31.3895 37.6063C31.2889 37.7378 31.1682 38.0411 31.128 38.2838C31.0877 38.5164 30.957 38.9006 30.8362 39.1433C30.7055 39.3759 30.5747 39.6994 30.5344 39.8612C30.4942 40.0129 30.3835 40.2657 30.2829 40.4173C30.1723 40.5589 30.0616 40.8724 30.0315 41.115C29.9912 41.3577 29.9007 41.6611 29.8202 41.7824C29.7297 41.9139 29.5586 42.3284 29.4279 42.7127C28.8947 44.2395 28.774 44.553 28.5728 44.9574C28.452 45.19 28.3615 45.4832 28.3615 45.6046C28.3615 45.9383 28.2408 46.0798 27.8988 46.1809C27.5567 46.282 27.1543 46.1607 27.1543 45.9585C27.1543 45.6855 27.4461 44.8563 27.597 44.6844C27.6875 44.5833 27.7982 44.2597 27.8585 43.9665C27.9189 43.6632 28.0195 43.3295 28.1 43.2182C28.1704 43.0969 28.2911 42.8239 28.3615 42.6014C28.4219 42.379 28.5929 41.9644 28.7237 41.6712C28.8544 41.3881 28.9651 41.0847 28.9651 41.0139C28.9651 40.9431 29.0556 40.7409 29.1562 40.569C29.2568 40.3971 29.3977 40.0028 29.4681 39.6893C29.5285 39.3759 29.6592 39.022 29.7598 38.8905C29.8604 38.7591 29.9711 38.486 30.0113 38.2838C30.0516 38.0816 30.1824 37.7176 30.3131 37.4749C30.4439 37.2322 30.5847 36.8783 30.625 36.6862C30.6652 36.4941 30.7859 36.2109 30.8865 36.0593C30.9972 35.9177 31.0777 35.7155 31.0777 35.6245C31.0777 35.5234 31.1883 35.1897 31.3191 34.8762C31.4499 34.5628 31.631 34.1077 31.7115 33.855C32.2748 32.1865 32.4458 31.8124 32.6873 31.681C33.0192 31.4888 33.0595 31.499 33.3009 31.7416ZM35.3028 38.0715C35.6851 38.3141 36.1076 38.7287 36.2585 39.0118C36.4295 39.3455 36.7414 42.2071 36.681 42.834C36.5 44.5429 36.4195 44.8968 36.0573 45.4428C35.5946 46.1405 35.2525 46.3225 34.3471 46.3326C33.3512 46.3427 32.979 46.2416 32.5766 45.8472C32.2849 45.554 32.1843 45.3417 31.9428 44.3912C31.6813 43.3598 31.6612 43.1576 31.7014 41.8229C31.7316 40.6802 31.7919 40.2252 31.9629 39.6691C32.2748 38.7186 32.7778 38.1321 33.4418 37.94C34.0353 37.7782 34.9407 37.8389 35.3028 38.0715Z"
										fill="#20D0EE"
									/>
									<path
										d="M26.0278 33.0765C25.2432 33.4911 25.1929 33.6327 25.1929 35.6044C25.1929 37.5357 25.2734 37.9098 25.7562 38.1525C25.9071 38.2334 26.2693 38.3042 26.551 38.3042C27.6676 38.3042 27.909 37.7582 27.8487 35.291L27.8084 33.7641L27.4765 33.4203C26.9835 32.9147 26.561 32.8136 26.0278 33.0765Z"
										fill="#20D0EE"
									/>
									<path
										d="M33.6532 39.4871C33.4721 39.5882 33.2709 39.841 33.0999 40.2151C32.8685 40.7106 32.8383 40.9331 32.8081 42.0251C32.778 42.9857 32.8081 43.3497 32.9188 43.5924C33.0093 43.7744 33.0999 44.0373 33.1401 44.189C33.2407 44.5833 33.3816 44.6642 34.0556 44.735C34.5384 44.7754 34.7095 44.7552 34.961 44.5934C35.2225 44.4215 35.2929 44.2901 35.4338 43.6227C35.635 42.7127 35.645 42.3183 35.4941 41.0948C35.3332 39.8612 35.2225 39.659 34.5787 39.4669C33.9851 39.295 34.0354 39.295 33.6532 39.4871Z"
										fill="#20D0EE"
									/>
								</svg>
					<input
					name="fat"
					id="fat"
					type="number"
					onBlur={updateDetails}
					placeholder="fat"
					>
					{details.fat}
					</input>
				</label>
						</fieldset>

						<fieldset class="sex_fieldset">
							<div className="sex_radio_group">
				<input
									type="radio"
									name="sex"
									onChange={updateDetails}
									placeholder="sex"
									value="male"
									id="male"
								></input>
								<label class="sex_radio_label" for="male" data-show-results={showResults()}>
									<svg
										width="41"
										height="42"
										viewBox="0 0 41 42"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M23.9474 0.636475V4.03756H35.1471L22.0734 17.1131C19.3306 14.9821 15.8788 13.9766 12.4207 14.3014C8.96267 14.6262 5.75843 16.2569 3.46048 18.8613C1.16253 21.4657 -0.0563408 24.8481 0.0520681 28.3197C0.160477 31.7913 1.58801 35.091 4.04399 37.547C6.49996 40.003 9.7997 41.4305 13.2713 41.5389C16.7429 41.6473 20.1252 40.4284 22.7297 38.1305C25.3341 35.8325 26.9647 32.6283 27.2895 29.1703C27.6143 25.7122 26.6089 22.2604 24.4779 19.5176L37.5517 6.44214V17.6419H40.9528V0.636475H23.9474ZM13.7441 38.0485C11.7261 38.0485 9.75337 37.4501 8.07545 36.3289C6.39753 35.2078 5.08975 33.6142 4.31749 31.7498C3.54523 29.8854 3.34317 27.8339 3.73686 25.8546C4.13056 23.8754 5.10233 22.0573 6.52928 20.6304C7.95623 19.2034 9.77428 18.2317 11.7535 17.838C13.7328 17.4443 15.7843 17.6463 17.6487 18.4186C19.5131 19.1909 21.1066 20.4986 22.2278 22.1766C23.3489 23.8545 23.9474 25.8272 23.9474 27.8452C23.9442 30.5503 22.8682 33.1437 20.9554 35.0565C19.0426 36.9693 16.4492 38.0453 13.7441 38.0485Z"
											fill="#20D0EE"
										/>
									</svg>
								</label>
								
								<input
									type="radio"
									name="sex"
									onClick={updateDetails}
									placeholder="sex"
									value="female"
									id="female"
								></input>
								<label class="sex_radio_label" for="female" data-show-results={showResults()}>
									<svg
										width="28"
										height="42"
										viewBox="0 0 28 42"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.8363 27.794C19.2768 27.3606 22.4228 25.6322 24.6339 22.9609C26.845 20.2895 27.9549 16.8759 27.7378 13.415C27.5206 9.95412 25.9927 6.70605 23.465 4.33202C20.9374 1.958 17.6 0.636475 14.1323 0.636475C10.6645 0.636475 7.32717 1.958 4.79952 4.33202C2.27186 6.70605 0.743934 9.95412 0.526776 13.415C0.309618 16.8759 1.41955 20.2895 3.63063 22.9609C5.84171 25.6322 8.98772 27.3606 12.4282 27.794V31.3214H3.90808V34.7294H12.4282V41.5456H15.8363V34.7294H24.3564V31.3214H15.8363V27.794ZM3.90808 14.2811C3.90808 12.2589 4.50772 10.2822 5.63117 8.60083C6.75461 6.91947 8.35141 5.60901 10.2196 4.83517C12.0879 4.06132 14.1436 3.85885 16.1269 4.25335C18.1102 4.64785 19.932 5.62161 21.3619 7.05149C22.7917 8.48137 23.7655 10.3031 24.16 12.2864C24.5545 14.2697 24.352 16.3255 23.5782 18.1937C22.8043 20.0619 21.4939 21.6587 19.8125 22.7822C18.1312 23.9056 16.1544 24.5053 14.1323 24.5053C11.4216 24.5021 8.82288 23.4239 6.90616 21.5072C4.98944 19.5905 3.91124 16.9917 3.90808 14.2811V14.2811Z"
											fill="#20D0EE"
										/>
									</svg>
								</label>
							</div>
							<input
								name="sex"
								type="text"
								onClick={updateDetails}
								placeholder="sex"
								value={details.sex}
							>
								{details.sex}
							</input>
						</fieldset>
				</div>
				<button class="calc_btn" type="button" onClick={calculateCalories}>
					Calculate!{" "}
				</button>
			</form>


			<div class="results_wrapper" data-show-results={showResults()}>
				<div class="option_wrapper option_exercise">
					<h3>How often do you exercise?</h3>
                        <div class='option'>
                        <button
                            type="button"
                            onClick={handleLifestyleChange}
                            value="-1"
                            name="lifestyleIndex"
                        >
                            -
                        </button>
                        <p>{lifestyleOptions[results.lifestyleIndex]}</p>
                        <button
                            type="button"
                            onClick={handleLifestyleChange}
                            value="1"
                            name="lifestyleIndex"
                        >
                            +
                        </button>
					</div>
					<p>{lifestyleDescription[results.lifestyleIndex]}</p>
				</div>

				<div class="option_wrapper option_goal">
					<h3>What is your goal?</h3>
					<div class='option'>
					<button
						type="button"
						onClick={handlePhaseChange}
						value="-1"
						name="phaseIndex"
					>
						-
					</button>
					<p>{phaseOptions[results.phaseIndex]}</p>
					<button
						type="button"
						onClick={handlePhaseChange}
						value="1"
						name="phaseIndex"
					>
						+
					</button>
					</div>
					<p>I want to {phaseDescription[results.phaseIndex]}</p>
				</div>

				<div class="option_wrapper option_carbs">
					<h3>What level of carbohydrate do you want to consume?</h3>
					<div class='option'>
					<button
						type="button"
						onClick={handleCarbChange}
						value="-1"
						name="carbIndex"
					>
						-
					</button>
					<p>{carbOptions[results.carbIndex]}</p>
					<button
						type="button"
						onClick={handleCarbChange}
						value="1"
						name="carbIndex"
					>
						+
					</button>
					</div>
				</div>
				
				<div class="results_section results_cals">
					<div >
					<p class="number">{results.adjustedCalories}</p>
					</div>
					<p>Total Daily Calories</p>
				</div>
				<div className="macronutrients">

					<div class="results_section results_macronutrients">
						<h4>Carbs</h4>
						<p class="number"> {macronutrients.carbs}g</p>
						<p>{100 * macroPercentages[results.carbIndex].carb}%</p>
					</div>

					<div class="results_section results_macronutrients">
						<h4>Protein</h4>
						<p class="number"> {macronutrients.protein}g</p>
						<p>{100 * macroPercentages[results.carbIndex].protein}%</p>
					</div>

					<div class="results_section results_macronutrients">
						<h4>Fat</h4>
						<p class="number"> {macronutrients.fat}g</p>
						<p>{100 * macroPercentages[results.carbIndex].fat}%</p>
					</div>

				</div>
						
			</div>
		<style>{`
			.macronutrients::before{
				content:"";
				height: 5px;
				position: absolute;
				top: -1em;
				left:0;
				right: 0;
				border-radius: 5px;
				background: linear-gradient(90deg, hsla(189 86% 53% / .8) 0%, hsla(189 86% 53% / .8) ${100 * macroPercentages[results.carbIndex].carb}%, hsla(189 86% 53% / .6) ${100 * macroPercentages[results.carbIndex].carb}%, hsla(189 86% 53% / .6) ${100 * (macroPercentages[results.carbIndex].carb + macroPercentages[results.carbIndex].protein)}%, hsla(189 86% 53% / .4) 56%);
			}`
			}
		</style>
		</div>
	</>
	);


}



export default CalorieCalc;
