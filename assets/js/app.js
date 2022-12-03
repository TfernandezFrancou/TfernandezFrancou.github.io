$(document).ready(function() {
	$("#avatar").click(function(){
		document.getElementById("popup").style.visibility = "visible";
		$("#navbar").fadeOut("fast");
		$("#popup").fadeIn("fast");
	})

	$("#closeX").click(function(){
		$("#popup").fadeOut("fast")
	})

	$("#openBm").click(function(){
		document.getElementById("burgerMenu").style.visibility = "visible";
		$("#burgerMenu").show();
	})

	$("#closeBm").click(function(){
		$("#burgerMenu").hide();
	})

	$("#projIndex").click(function(){
		window.location.hash = "#projectsDiv";
	})

	$("#coursesIndex").click(function(){
		window.location.hash = "#coursesDiv";
	})

	$("#infoIndex").click(function(){
		window.location.hash = "#infoDiv";
	})

	$("#contactIndex").click(function(){
		window.location.hash = "#contactDiv";
	})

	$("#NID__btn").click(function(){
		window.open("https://github.com/TfernandezFrancou/Nightmare-in-Nordelta", "_blank");
	})

	$("#seProgramar__btn").click(function(){
		window.open("https://seprogramar.inti.gob.ar/inti/certificates/verify/1RMz9_NQyZk4oRmF", "_blank");
	})

	document.getElementById("name").onkeydown = function(e) {
		if(e.key === 'Enter') {
			$("#email").show()
			$("#emailInput").focus();
			document.getElementById("nameInput").readOnly = true;
			return false;
		}
	}

	document.getElementById("email").onkeydown = function(e) {
		if(e.key === 'Enter') {
			$("#message").show()
			var msgInput = document.getElementById("msgInput");
			setCaretPosition(msgInput, 1);
			document.getElementById("emailInput").readOnly = true;
			return false;
		}
	}

	$("#msgInput").keypress(function (e) {
		if(this.value === '"..."') {
			this.value = '""';
			setCaretPosition(this, 1);
		}
		if(e.which === 13 && !e.shiftKey) {
			e.preventDefault();

			if(confirm("¿Desea enviar el mensaje?")) $(this).closest("form").submit();
			else false;
		}
	});

	$("#popup").click(function(){
		$("#navbar").fadeIn("fast");
		$("#closeX").click()
	})

	$(document).click(function () {
		$('.navbar-collapse').collapse('hide');
	 });

	$(document).keydown(function(e) {
		if (e.key === 'Escape') {
			if ($("#popup").is(':visible')) {
				$("#popup").click();
			}

			if ($("#navbar").is(':visible')) {
				$('.navbar-collapse').collapse('hide');
			}
		}
	})

	$("#msgInput").on('input', function() {
		this.style.height = 'auto';
		this.style.height = (this.scrollHeight) + 'px';
	})

	$("input").keydown(function(e) {
		if(e.key !== 'Enter') this.style.width = this.value.length + 1 + 'ch';
	})

	function setCaretPosition(ctrl, pos) {
		if (ctrl.setSelectionRange) {
		  ctrl.focus();
		  ctrl.setSelectionRange(pos, pos);
		}
	}

})