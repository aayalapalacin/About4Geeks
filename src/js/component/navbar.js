import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
	
		<div>
<div class="row mt-5">
	<div class="col-12 col-sm-8"> 
		<h1>
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="graduation-cap"
			class="svg-inline--fa fa-graduation-cap fa-w-20"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
		>
			<path
			fill="currentColor"
			d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
			></path>
		</svg>
		Learn in Public
		</h1>
		<p class="mb-1 mx-0 mt-0 ">
		Learning to code is hard, why do it alone? Share your profile,
		acomplishments and frustrations with the rest of 4Geeks community!
		</p>
					<ul class="mt-0 mb-1 p-0">
					<li class="badge badge-dark p-2 mr-1">
						<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.100daysofcode.com/">
							100DaysOfCode.com
							</a>
					</li>
					<li class="badge badge-dark p-2 mr-1">
						<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.swyx.io/writing/learn-in-public/"
						>Why Learn in Public</a>
					</li>
					<li class="badge badge-dark p-2 mr-1">
						<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/search?q=%23100DaysOfCode">
							#100DaysOfCode</a>
					</li>
					</ul> 
		<small>This project was last built: <strong>a minute ago</strong></small> 
	</div>
  <div class="col-12 col-sm-4 text-right">
    <button id="show-instructions" class="btn btn-lg btn-light mb-2 w-100">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="plus-circle"
        class="svg-inline--fa fa-plus-circle fa-w-16 text-success"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
        ></path>
      </svg>
      Add yourself to this list</button>
	  <button class="btn btn-lg btn-primary w-100" id="show-share">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="share-alt"
        class="svg-inline--fa fa-share-alt fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
        ></path>
      </svg>
      Share your commitment
    </button>
  </div>
</div>
 <div id="instructions" class="bg-light p-4 mt-3 instructions hide">
  <h3 class="mb-3">How can you add yourself to this list?</h3>
  <div class="row">
    <div class="col">
      <h4><span class="number">1</span> Create a student YML</h4>
      <p class="pl-4">
        The student information is stored in
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=cdLNKUoMc6c"
          >YML format</a>
        inside
        <a
          href="https://github.com/4GeeksAcademy/About-4Geeks-Academy/tree/master/site/resumes"
          rel="noopener noreferrer"
          target="_blank"
          >this folder</a>, you have to copy the file content and adapt to your own information,
        use
        <a
          href="https://github.com/4GeeksAcademy/About-4Geeks-Academy/blob/master/site/resumes/example.yml"
          rel="noopener noreferrer"
          target="_blank"
          >this YML</a>
        as an example.
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h4><span class="number">2</span> Validate your YML</h4>
      <p class="pl-4">
        Before submiting your YML, validate the content using this tool:
        <a
          href="http://www.yamllint.com/"
          rel="noopener noreferrer"
          target="_blank"
          >Yaml Lint</a>
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h4><span class="number">3</span> Create a Pull Request (PR)</h4>
      <p class="pl-4">
        Fork
        <a href="https://github.com/4GeeksAcademy/About-4Geeks-Academy"
          >this repository</a>
        and create your student file under the resumes folder
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h4><span class="number">4</span> Wait for it!</h4>
      <p class="pl-4">
        It takes a few minutes to complete, you can follow the status on your
        pull request conversation, you can also check if your commit is showing
        alreading on the main repository
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/4GeeksAcademy/student-external-profile/commits/master"
          >commits history</a>
        and your pull request should have sa ✅ green check on the
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/4GeeksAcademy/About-4Geeks-Academy/actions?query=workflow%3A%22Testing+for+Errors%22"
        >
          repository list of completed actions</a>
      </p>
      <p>teererst</p>
      <p>test</p>
      <p>test</p>
    </div>
  </div>
  <button id="close-instructions" class="btn btn-primary w-100">
    Close this Instructions
  </button>
</div>

		</div>
		

	);
};
