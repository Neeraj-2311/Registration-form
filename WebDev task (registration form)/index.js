var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('file-name').innerText = event.target.files[0].name;
};