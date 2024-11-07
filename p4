<!-- 8. /** The photo below is a page structural layer, please according to SEO
friendly rules write down HTML base structure. Note. Mobile friendly first. **/ -->

<body>
	<!--  HTML structure start -->
	<header>
		<!-- Logo -->
		<div class="logo">
			<a href="/">
				<img
					src="logo.png"
					alt="Logo" />
			</a>
		</div>

		<!-- Menu -->
		<nav>
			<ul class="menu">
				<li></li>
			</ul>
		</nav>
	</header>

	<!-- Item -->
	<main>
		<article class="item-wrapper">
			<!-- Item Photos Slide -->
			<section class="item-photo-container">
				<figure class="item-photo">
					<img
						src="item_1.jpg"
						class="item-photo__img"
						alt="photo of item 1" />
					<figcaption class="item-photo__caption">Item 1 Title</figcaption>
				</figure>
			</section>

			<!-- Product Details -->
			<section class="item-detail-container">
				<div class="item-detail">
					<p class="item-detail__description">Item Detail Description</p>
				</div>

				<!-- Product Description -->
				<div class="item-detail">
					<ul class="item-detail__list">
						<li class="item-detail__list-item">Description 1</li>
						<li class="item-detail__list-item">Description 2</li>
						<li class="item-detail__list-item">Description 3</li>
					</ul>
				</div>
			</section>
		</article>
	</main>

	<!-- Footer -->
	<footer>
		<div>
			<p>Footer</p>
		</div>
	</footer>
</body>
