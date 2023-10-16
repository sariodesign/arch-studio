<script setup>
</script>

<template>
	<section class="contact-form">
		<form class="form" method="POST">
			<legend>Connect with us</legend>
			<div class="form-fields">
				<div class="form-field">
					<FormKit 
						type="text"
						name="name"
						placeholder="Name"
						validation="required"
						validation-visibility="dirty"
					/>
				</div>
				<div class="form-field">
					<FormKit
					 type="email"
					 name="email"
					 placeholder="Email"
					 validation="required"
					 validation-visibility="dirty"
					/>
				</div>
				<div class="form-field">
					<FormKit
						outer-class="form-textarea"
						type="textarea"
						name="message"
						placeholder="Message"
						row="5"
						validation="required"
						validation-visibility="dirty"
					/>
				</div>
				<button type="submit"><img src="/icon-arrow.svg" alt="icon arrow" /></button>
			</div>
		</form>
	</section>
</template>

<style lang="scss">

.contact-form {
	padding: 0 32px;
	
	@media screen and (min-width: 1024px) {
		padding: 0;
	}
}

.form {
	margin-bottom: 132px;

	@media screen and (min-width: 1024px) {
		column-gap: 30px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 200px
	}

	legend {
		font-size: 48px;
		font-weight: 700;
		line-height: 52px;
		margin-bottom: 42px;
		max-width: 220px;

		@media screen and (min-width: 1024px) {
			font-size: 72px;
			max-width: 280px;
		}
	}

	.form-fields {
		@media screen and (min-width: 1024px) {
			width: 730px;
		}
	}
	
	.formkit-outer {
		position: relative
	}

	.formkit-messages {
		color: var(--red);
		font-size: 18px;
		position: absolute;
		right: 0;
		top: 8px;
	}

	.formkit-input,
	.formkit-textarea {
		border: 0;
		border-bottom: 1px solid var(--very-dark-blue);
		color: var(--very-dark-blue);
		font-family: "Spartan Bold";
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 42px;
		padding: 0 0 20px;
		text-indent: 32px;
		width: 100%;

		&:focus {
			outline: none;
			border-width: 3px;
		}
	}

	.form-textarea .formkit-input {
		margin-bottom: 0;
		vertical-align: bottom;
	}

	button[type="submit"] {
		align-items: center;
		background-color: var(--very-dark-blue);
		border: 0;
		cursor: pointer;
		display: flex;
		height: 80px;
		margin-left: auto;
		justify-content: center;
		width: 80px;

		&:hover {
			opacity: .5
		}
	}
}

::placeholder {
	color: var(--light-grey)
}

</style>