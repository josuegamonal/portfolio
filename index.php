<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Josue's Portfolio</title>
	<link rel="icon" type="image/x-icon" href="/images/favicon.png">
	<meta name='robots' content='noindex,nofollow' />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Mono:wght@100;400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
</head>
<body>
<?php include 'includes/nav.php' ?>

	<section class="about-me">
		<div class="container">
			<div class="selfie-movil center">
				<img src="images/selfie-movil.png" alt="Selfie">
			</div>
			<div class="main-text">
				<h1>¡Hola!</h1>
				<p>Soy Josué, diseñador gráfico con más de 15 años de experiencia, y este es mi portfolio con algunos de mis trabajos.<br><br>Echa un vistazo y, si te gusta, ¡no dudes en ponerte en contacto conmigo!</p>
				<div class="icon more" id="boton-mas">
					<img class="icon-svg" src="images/icons/plus-circle-fill.svg" alt="Linkedin">
				</div>
			</div>
			<div class="selfie">
				<img src="images/selfie.png" alt="Selfie">
				<!---<img src="botones.jpg" alt=""> --->
			</div>
		</div>
	</section>

	<section class="curriculum" id="curriculum-id">
		<div class="container" id="experiencia">
			<div class="experiencia">
				<div class="skill-container">
					<h3>Experiencia laboral</h3>
					<ul>
						<li>2021-2023 DIRECTOR DE ARTE | FRONT-END DEVELOPER en Rita Y Peter</li>
						<li>2010-2021 DIRECTOR DE ARTE en AVON Cosmetics S.A.</li>
						<li>2005-2010 DISEÑADOR INDUSTRIAL-GRÁFICO FREELANCE</li>
					</ul>
					<br>
					<h3>Estudios</h3>
					<ul>
						<li>2022 - PRESENTE DESARROLLO DE SOFTWARE | 42 Madrid. Fundación Telefónica</li>
						<li>2005 - 2008 BA HONS PRODUCT DESIGN | Central Saint Martins. University of the Arts, London</li>
						<li>2000 - 2003 TÉCNICO SUPERIOR EN GRÁFICA PUBLICITARIA | Escuela de Arte Nº 10 de Madrid</li>
						<li>1997 - 2000 TÉCNICO SUPERIOR EN ILUSTRACIÓN | Escuela de Arte Nº 10 de Madrid</li>
					</ul>
					<br>
					<h3>Skills</h3>
					<div class="skills">

						<div class="icon-skills" title="HTML">
							<img class="icon-svg" src="images/iconos-color/html-5-svgrepo-com.svg" alt="HTML">
						</div>
						<div class="icon-skills" title="CSS">
							<img class="icon-svg" src="images/iconos-color/css-3-svgrepo-com.svg" alt="CSS">
						</div>
						<div class="icon-skills" title="JavaScript">
							<img class="icon-svg" src="images/iconos-color/js-svgrepo-com.svg" alt="JavaScript">
						</div>
						<div class="icon-skills" title="Wordpress">
							<img class="icon-svg" src="images/iconos-color/icons8-wordpress.svg" alt="Wordpress">
						</div>
						<div class="icon-skills" title="Figma">
							<img class="icon-svg" src="images/iconos-color/icons8-figma.svg" alt="Figma">
						</div>
						<div class="icon-skills" title="Photoshop">
							<img class="icon-svg" src="images/iconos-color/adobe-photoshop-svgrepo-com.svg" alt="Photoshop">
						</div>
						<div class="icon-skills" title="Illustrator">
							<img class="icon-svg" src="images/iconos-color/adobe-illustrator-svgrepo-com.svg" alt="Illustrator">
						</div>
						<div class="icon-skills" title="InDesign">
							<img class="icon-svg" src="images/iconos-color/adobe-indesign-seeklogo.com.svg" alt="InDesign">
						</div>
						<div class="icon-skills" title="Blender">
							<img class="icon-svg" src="images/iconos-color/icons8-blender-3d.svg" alt="Blender">
						</div>
						<div class="icon-skills" title="DaVinciResolve">
							<img class="icon-svg" src="images/iconos-color/icons8-davinci-resolve-144.svg" alt="DaVinci Resolve">
						</div>
					</div>
				</div>
			</div>

			</div>
		</div>
	</section>

	<section class="portfolio">
		<div class="container">
			<div class="vacio"></div>
			<div class="titulo-h3">
				<h3>Portfolio</h3>
			</div>
		</div>

		<div class="container">
			<div class="text-portfolio">
				<p>Estos son algunos de los trabajos más destacados que he hecho en los últimos años.</p>
			</div>
		</div>

		<div class="container" id="projects">

			<a href="proyecto-RitayPeter.php" class="trabajo-1">
				<div class="trabajos" id="trab-1"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/ritaypeter/rita_peter_portatil.webp" alt="Rita y Peter">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones.jpg" alt="Rita y Peter">
				</div>
			</a>

			<a href="proyecto-thermomix.php" class="trabajo-2">
				<div class="trabajos" id="trab-2"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos img-special" src="images/thermomix/banner_thermomix.webp" alt="Vive Thermomix">
					<img class="img-trabajos img-special image-sus" src="images/imgs-sustitucion/botones10.jpg" alt="Vive Thermomix">
				</div>
			</a>

			<a href="proyecto-beteling.php" class="trabajo-3">
				<div class="trabajos" id="trab-3"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/beteling/beteling-post.jpg" alt="Catálogo Beteling Group">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones3.jpg" alt="Catálogo Beteling Group">
				</div>
			</a>

			<a href="proyecto-producto.php" class="trabajo-4">
				<div class="trabajos" id="trab-4"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/producto/bombay.jpg" alt="Diseño Producto">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones6.jpg" alt="Diseño Producto">
				</div>
			</a>

			<a href="proyecto-gmevents.php" class="trabajo-5">
				<div class="trabajos" id="trab-5"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/gmevents/gmevents-button.webp" alt="GM Events">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones7.jpg" alt="GM Events">
				</div>
			</a>

			<a href="proyecto-avon.php" class="trabajo-6">
				<div class="trabajos" id="trab-6"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/avon/banner-avon.webp" alt="Catálogos AVON">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones9.jpg" alt="Catálogos AVON">
				</div>
			</a>

			<a href="proyecto-sapphira.php" class="trabajo-7">
				<div class="trabajos" id="trab-7"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos img-special" src="images/shappira/Sapphira_web.webp" alt="Web Sapphira Prive">
					<img class="img-trabajos img-special image-sus" src="images/imgs-sustitucion/botones8.jpg" alt="Web Sapphira Prive">
				</div>
			</a>

			<a href="proyecto-lapandemonio.php" class="trabajo-8">
				<div class="trabajos" id="trab-8"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/pandemonio/la_pandemonio.jpeg" alt="La Pandemonio">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones2.jpg" alt="La Pandemonio">
				</div>
			</a>

			<a href="proyecto-guias.php" class="trabajo-9">
				<div class="trabajos" id="trab-9"
					onmouseover="toggleContent(this, true)"
					onmouseout="toggleContent(this, false)">
		 			<img class="img-trabajos" src="images/avon/guias.webp" alt="Ilustración">
					<img class="img-trabajos image-sus" src="images/imgs-sustitucion/botones11.jpg" alt="Ilustración">
				</div>
			</a>
</div>
<div class="container">
			<div class="text-portfolio">
				<a href="portfolio_a3_2023_low.pdf" download="josue_gamonal_portfolio">
					<p>Descargar portfolio pdf aquí</p>
				</a>
			</div>
		</div>

	</section>


	<section class="contact">
		<div class="container">
			<div class="vacio"></div>
			<div class="titulo-h3">
				<h3>Contacto</h3>
			</div>
		</div>
		<div class="container container-contacto">
			<div class="main-text">
				<p>Si quieres puedes contactar conmigo por mail o puedes seguirme en Linkedin, Github e Instagram.

				</p>
			</div>
			<div class="enlaces-contacto">
				<a href="mailto:josue.gamonal@gmail.com">
					<div class="icon">
					<img class="icon-svg" src="images/icons/envelope-fill.svg" alt="Github">
					</div>
				</a>
				<a href="https://www.linkedin.com/in/josue-gamonal-lopez/" target="_blank">
					<div class="icon">
					<img class="icon-svg" src="images/icons/linkedin.svg" alt="Linkedin">
					</div>
				</a>
				<a href="https://github.com/josuegamonal" target="_blank">
					<div class="icon">
						<img class="icon-svg" src="images/icons/github.svg" alt="Github">
					</div>
				</a>
				<a href="https://www.instagram.com/josuegamonallopez/" target="_blank">
					<div class="icon">
						<img class="icon-svg" src="images/icons/instagram.svg" alt="Github">
					</div>
				</a>

			</div>
		</div>
	</section>

<?php include 'includes/footer.php' ?>

	<script src="index.js"></script>
</body>
</html>
