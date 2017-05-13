			var arr = [];
			var pdf = new jsPDF();
			var i = 30;
			var slideIndex = 1;
			showDivs(slideIndex);

			function plusDivsback(n){
				showDivs(slideIndex += n);
			}

			function plusDivs(n){
				showDivs(slideIndex += n);
			}

			function plusDivs1(n) {
				//QUESTION 1
				if(document.getElementById('qa1').checked == false && document.getElementById('qa2').checked == false && document.getElementById('qa3').checked == false && document.getElementById('qa4').checked == false && document.getElementById('qa5').checked == false && document.getElementById('qa6').checked == false && document.getElementById('qa7').checked == false && document.getElementById('qa8').checked == false ){
				//showDivs(slideIndex += n);
				alert("Please choose at least one");
				showDivs(slideIndex = 0);
				}
				
				if(document.getElementById('qa1').checked == true){
					//showDivs(slideIndex += n);
					arr[0] = "I am concerned that taking RAI may harm my family and/or children";
				}
				if(document.getElementById('qa2').checked == true){
					//showDivs(slideIndex += n);
					arr[1] = "I am planning to get pregnant/ start a family and am concerned that RAI may affect this plan";
				}
				if(document.getElementById('qa3').checked == true){
					//showDivs(slideIndex += n);
					arr[2] = "I am concerned that I have to take lifelong thyroid hormone replacement";
				}
				if(document.getElementById('qa4').checked == true){
					///showDivs(slideIndex += n);
					arr[3] = "I am concerned that I will gain weight if I am hypothyroid";
				}
				if(document.getElementById('qa5').checked == true){
					//showDivs(slideIndex += n);
					arr[4] = "My goitre is large and I wish to reduce the size of it";
				}
				if(document.getElementById('qa6').checked == true){
					//showDivs(slideIndex += n);
					arr[5] = "I am afraid of surgery";
				}
				if(document.getElementById('qa7').checked == true){
					//showDivs(slideIndex += n);
					arr[6] = "I am concerned that medication may damage my kidneys (or other organs)";
				}
				if(document.getElementById('qa8').checked == true){
					showDivs(slideIndex += n);
					arr[7] = "No concern";
				}
				else{
					showDivs(slideIndex += n);
				}
			}

			function plusDivs2(n){
				//QUESTION 2
				if((document.getElementById('qb1yes').checked == true || document.getElementById('qb1no').checked == true) && (document.getElementById('qb2yes').checked == true || document.getElementById('qb2no').checked == true) && (document.getElementById('qb3yes').checked == true ||document.getElementById('qb3no').checked == true) && (document.getElementById('qb4yes').checked == true || document.getElementById('qb4no').checked == true) ){
					showDivs(slideIndex += n);
				
				}
				else{
					alert("Please answer all questions");
					showDivs(slideIndex =2);
				}

				if(document.getElementById('qb1yes').checked == true){
					//showDivs(slideIndex += n);
					arr[8] = "Yes";
				}
				if(document.getElementById('qb1no').checked == true){
					//showDivs(slideIndex += n);
					arr[8] = "No";
				}
				if(document.getElementById('qb2yes').checked == true){
					//showDivs(slideIndex += n);
					arr[9] = "Yes";
				}
				if(document.getElementById('qb2no').checked == true){
					//showDivs(slideIndex += n);
					arr[9] = "No";
				}
				if(document.getElementById('qb3yes').checked == true){
					//showDivs(slideIndex += n);
					arr[10] = "Yes";
				}
				if(document.getElementById('qb3no').checked == true){
					//showDivs(slideIndex += n);
					arr[10] = "No";
				}
				if(document.getElementById('qb4yes').checked == true){
					//showDivs(slideIndex += n);
					arr[11] = "Yes";
				}
				if(document.getElementById('qb4no').checked == true){
					//showDivs(slideIndex += n);
					arr[11] = "No";
				}
				
			}
			
			function plusDivs3(n){
				//QUESTION 3
				if(document.getElementById('yes').checked == false && document.getElementById('no').checked == false){
					alert("Please choose one");
					showDivs(slideIndex =2);
				}
				
				if(document.getElementById('no').checked == true){
					showDivs(slideIndex += n);
					arr[12] = "No, I am not ready";
				}
				else if(document.getElementById('yes').checked == true){
					showDivs(slideIndex += 2);
					slideIndex = slideIndex-1;
					arr[12] = "Yes, I am ready";
				}
				else{
					showDivs(slideIndex += n);
				}
			}	
			
			function plusDivs4(n){
				//QUESTION 4
				if(document.getElementById('treat1').checked == false && document.getElementById('treat2').checked == false && document.getElementById('treat3').checked == false){
					alert("Please choose one treatment that suits you the most");
					showDivs(slideIndex = 4);
				}

				if(document.getElementById('treat1').checked == true){
					//showDivs(slideIndex += 0);
					arr[13] = "Anti-thyroid medication";
				}
				if(document.getElementById('treat2').checked == true){
					//showDivs(slideIndex += 0);
					arr[13] = "Radioactive Iodine";
				}
					   				   	
				if(document.getElementById('treat3').checked == true){
					//showDivs(slideIndex += 0);
					arr[13] = "Thyroid Surgery";
				}
				else{
					showDivs(slideIndex += n);
				}	
			}
			/*function plusDivs(n) {
				if(document.getElementById('no').checked == true){
					showDivs(slideIndex += n);
				}
				else if(document.getElementById('yes').checked == true){
					showDivs(slideIndex += 2);
					slideIndex = slideIndex-1;
				}
				else{
					showDivs(slideIndex += n);
				}
					  
			}*/

			function showDivs(n) {
			  var i;
			  var x = document.getElementsByClassName("mySlides");
			  if (n > x.length) {
			  	slideIndex = 1
			  }    
			  if (n < 1) {
			  	slideIndex = x.length
			  }
			  for (i = 0; i < x.length; i++) {
			     x[i].style.display = "none";  
			  }
			  x[slideIndex-1].style.display = "block";  
			}

			function printsss(){
				if(document.getElementById('soalYes').value != ""){
					arr[14] = document.getElementById('soalYes').value;
				}
				if(document.getElementById('soalNo').value != ""){
					arr[14] = document.getElementById('soalNo').value;
				}
				var k = 30;
				for(var j = 0; j < 15; j++){
					pdf.text(30, k, 'arr 1: '+arr[j]);
					k = k+10;
				}
				
				pdf.save('testhuhu.pdf');
			}
			
			function huhu(){
				document.getElementById('id01').style.display='block';
				pilihan = " ";
				for( r = 0; r <= 7; r++){
					if(arr[r] != null){
				    	pilihan = pilihan+"- "+arr[r]+"<br> ";
					}
				}
				document.getElementById('questionA').innerHTML = pilihan;

				document.getElementById('questionB1').innerHTML = "- "+arr[8];
				document.getElementById('questionB2').innerHTML = "- "+arr[9];
				document.getElementById('questionB3').innerHTML = "- "+arr[10];
				document.getElementById('questionB4').innerHTML = "- "+arr[11];

				document.getElementById('questionC').innerHTML = "- "+arr[12];

				document.getElementById('questionD').innerHTML = "- "+arr[13];
				if(document.getElementById('soalYes').value != ""){
					arr[14] = document.getElementById('soalYes').value;
				}
				document.getElementById('questionE').innerHTML = "- "+arr[14];

			}

			function huhu2(){
				document.getElementById('id02').style.display='block';
				pilihan = " ";
				for( r = 0; r <= 7; r++){
					if(arr[r] != null){
				    	pilihan = pilihan+"- "+arr[r]+"<br> ";
					}
				}
				document.getElementById('nquestionA').innerHTML = pilihan;

				document.getElementById('nquestionB1').innerHTML = "- "+arr[8];
				document.getElementById('nquestionB2').innerHTML = "- "+arr[9];
				document.getElementById('nquestionB3').innerHTML = "- "+arr[10];
				document.getElementById('nquestionB4').innerHTML = "- "+arr[11];

				document.getElementById('nquestionC').innerHTML = "- "+arr[12];

				if(document.getElementById('soalNo').value != ""){
					arr[14] = document.getElementById('soalNo').value;
				}
				document.getElementById('nquestionE').innerHTML = "- "+arr[14];

			}

			