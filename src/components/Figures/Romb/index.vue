<template>
	<svg version="1.1" id="figuresSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 680 680" style="enable-background:new 0 0 680 680; overflow: visible" xml:space="preserve">
		<defs>
			<rect id="SVGID_1_" x="-660" width="1000" height="980"/>
			<rect id="SVGID_3_" x="340" width="1000" height="980"/>
			<filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse">
				<feGaussianBlur in="SourceGraphic" stdDeviation="9" />
			</filter>
		</defs>
		<g xmlns="http://www.w3.org/2000/svg" id="img-group-norm" class="figure-background-img" clip-path="url(#SVGID_2_)">
			<path id="path_for_img_shape" style="stroke-width: 0; stroke: transparent; fill: #0CF3D0" d="M545.2,340L340,545.2L134.8,340L340,134.8L545.2,340"/>
			<clipPath id="clip_for_img_shape">
				<use xlink:href="#path_for_img_shape" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow:hidden;"/>
			</clipPath>
			<g style="clip-path:url(#clip_for_img_shape);">
					<image width="450" height="450" id="img-inside-mask" xlink:href="@/assets/img/2CABEC532.png" xmlns:xlink="http://www.w3.org/1999/xlink" transform="matrix(1 0 0 1 115 115)">
				</image>
			</g>
		</g>
		<g xmlns="http://www.w3.org/2000/svg" id="img-group-blur" class="figure-background-img" clip-path="url(#SVGID_4_)">
			<!--<path id="path_for_img_shape" style="stroke: yellow" d="M545.2,340L340,545.2L134.8,340L340,134.8L545.2,340"/>-->
			<clipPath id="clip_for_img_shape">
				<use xlink:href="#path_for_img_shape" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow:hidden;"/>
			</clipPath>
			<g filter="url(#f1)" style="clip-path:url(#clip_for_img_shape);">
					<image width="450" height="450" id="img-inside-mask" xlink:href="@/assets/img/2CABEC532.png" xmlns:xlink="http://www.w3.org/1999/xlink" transform="matrix(1 0 0 1 115 115)">
				</image>
			</g>
		</g>
		<g id="norm">
			<clipPath id="SVGID_2_">
				<use xlink:href="#SVGID_1_" class="normalMask rotator" style="overflow:visible;"/>
			</clipPath>
				<linearGradient id="normal_2_" gradientUnits="userSpaceOnUse" x1="2592.8337" y1="2908.2224" x2="3044.6479" y2="2908.2224" gradientTransform="matrix(-2.362664e-04 1 -1 -2.362664e-04 3248.8884 -2478.0537)">
				<stop  offset="0" style="stop-color:#00D3FF"/>
				<stop  offset="0.9949" style="stop-color:#00FFCE"/>
				</linearGradient>
			<path id="normFig" clip-path="url(#SVGID_2_)" class="st0 normalShape rotator" v-bind:d="path.norm" />
		</g>
		<g id="blur">
			<clipPath id="SVGID_4_">
				<use xlink:href="#SVGID_3_"  style="overflow:visible;" class="blurMask rotator"/>
			</clipPath>
				<linearGradient id="normal_4_" gradientUnits="userSpaceOnUse" x1="2592.7356" y1="2908.1714" x2="3044.8486" y2="2908.1714" gradientTransform="matrix(-2.362664e-04 1 -1 -2.362664e-04 3248.8884 -2478.0537)">
				<stop  offset="0" style="stop-color:#00D3FF"/>
				<stop  offset="0.1949" style="stop-color:#00FFCE"/>
			</linearGradient>
			<path id="blurFig"  filter="url(#f1)" clip-path="url(#SVGID_4_)" class="st1 blurShape rotator" v-bind:d="path.blured" />
		</g>
		<image class="light1" style="overflow:visible;" width="130" height="253" id="light-bottom_1_" xlink:href="@/assets/img/AFECF391.png" v-bind:transform="light.top">
		</image>
		<image class="light2" style="overflow:visible;" width="130" height="253" id="light-top" xlink:href="@/assets/img/AFECF391.png" v-bind:transform="light.bottom">
		</image>
	</svg>
</template>

<script src="./scripts.js"></script>

<style lang="sass" scoped src="../styles.sass"></style>
