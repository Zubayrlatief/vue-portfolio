<template>

<section class="hero-area section-bg pt-140 pb-100" id="home">
    <div class="container">
        <div class="row">
        <div class="col-lg-6">
            <div class="hero-content">
                <h5 class="sub-title">Welcome</h5>
                <h2 class="title">
                    <span>Im</span>
                    " Zubayr"
                </h2>
                <h2 class="cd-headline clip is-full-width">
                    " a "
                    <span class="cd-words-wrapper">
                        
                    </span>
                </h2>
                <p>Passionate fullstack web developer excited to increase my experience</p>
                <div class="hero-btn mt-4">
                    <a href="#contact" class="button">HIRE ME</a>
                    <a href="#projects" class="button button-hover">MY WORK</a>
                </div>
            </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="hero-img">
                <img src="https://zubayrlatief.github.io/portfolio_hostedImages/myportfolioimg.jpg
" alt="img">
            </div>
        </div>
    </div>
</section>

</template>
<script>
export default {
    
}
</script>

<style>
.header {
	padding: 10px 0px;
}

.header.sticky {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	-webkit-animation: sticky 1s;
	-moz-animation: sticky 1s;
	-o-animation: sticky 1s;
	animation: sticky 1s;
	-webkit-box-shadow: 2px 4px 8px rgba(51, 51, 51, 0.25);
	-moz-box-shadow: 2px 4px 8px rgba(51, 51, 51, 0.25);
	box-shadow: 2px 4px 8px rgba(51, 51, 51, 0.25);
	background-color: #fff;
}

@-webkit-keyframes sticky {
	0% {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
	100% {
		-webkit-transform: translateY(0%);
		transform: translateY(0%);
	}
}

@keyframes sticky {
	0% {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
	}
	100% {
		-webkit-transform: translateY(0%);
		transform: translateY(0%);
	}
}

.mobile-menu {
	display: none;
}

.logo h2 {
	font-size: 35px;
	font-weight: 900;
	line-height: 1;
	margin-top: 4px;
}

.logo h2 a {
	color: #8e43e7;
}


/*------- Menu -------*/

.menu {
	text-align: right;
}

.menu ul li {
	display: inline-block;
}

.menu ul li a {
	position: relative;
	padding: 10px 15px;
	background-color: transparent;
	color: #30343d;
	font-weight: 700;
	font-size: 16px;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	display: inline-block;
}

.menu ul li a:hover {
	color: #e85c41;
}

.menu ul li a::after {
	content: "";
	clear: both;
	display: block;
	overflow: hidden;
	width: 0%;
	height: 2px;
	background: #e85c41;
	position: absolute;
	right: 0;
	bottom: 0;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

.menu ul li a:before {
	content: "";
	clear: both;
	display: block;
	overflow: hidden;
	width: 0%;
	height: 2px;
	background: #e85c41;
	position: absolute;
	left: 0;
	top: 0;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

.menu ul li.current a {
	color: #e85c41;
}

.menu ul li.current a::before {
	width: 100%;
}

.menu ul li.current a::after {
	width: 100%;
}


/*---------------------------------
		3.Banner CSS
----------------------------------*/

.hero-content {
	margin-top: 50px;
}

h5.sub-title {
	color: #8c89a2;
	font-weight: 600;
	font-size: 20px;
	text-transform: uppercase;
	letter-spacing: 2px;
}

.hero-img {
	text-align: center;
}

.hero-img img {
	width: 80%;
	border-radius: 50%;
}

.hero-content h2.title {
	font-size: 48px;
	line-height: 1.2;
	font-weight: 600;
	color: #403b66;
	margin-top: 10px;
}

.hero-content h2.title span {
	font-weight: 400;
}

.hero-content h2 {
	font-size: 48px;
	line-height: 1.2;
	font-weight: 600;
	color: #403b66;
}

.hero-content h2 span {
	padding: 0px;
}

.cd-headline.clip span {
	padding: 0px;
}

.hero-content h2 span b {
	font-weight: 400;
}

.hero-content p {
	color: #686767;
	font-size: 18px;
	margin-top: 20px;
	line-height: 28px;
	margin-bottom: 10px;
	display: inline-block;
}

.hero-btn a {
	margin-right: 15px;
}

</style>