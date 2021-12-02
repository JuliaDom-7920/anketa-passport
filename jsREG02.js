//Завантаження підпису
(function signature() {
	var signature=document.getElementById('14-signature');
	signature.addEventListener('change', function previewFile() {
		var preview=document.getElementById('file-preview');
		signature=document.getElementById('14-signature').files[0];
		var reader=new FileReader();
		reader.onloadend=function () {
			preview.src=reader.result;
		}
		if (signature) {
			reader.readAsDataURL(signature);
			preview.style.visibility='visible';
			document.getElementsByClassName('.file-preview').style.visibility='visible';
		}
		else preview.src='';
	});
})();
//Завантаження фотографії людини
(function photo() {
	var photo=document.getElementById('photo');
	photo.addEventListener('change', function previewFile() {
		var preview=document.getElementById('photo-preview');
		photo=document.getElementById('photo').files[0];
		var reader=new FileReader();
		reader.onloadend=function () {
			preview.src=reader.result;
		}
		if (photo) {
			reader.readAsDataURL(photo);
			preview.style.visibility='visible';
			document.getElementsByClassName('.photo-preview').style.visibility='visible';	
		}
		else preview.src='';
	});
})();
//Запуск валідації
(function checkForm() {
  get_text_value();
  get_date();
  get_radio();
  get_checkbox();
})();
//Перевірка текстових полів
function text_value(name,index,req) {
  var title, pattern, textError;
  switch(name) {
    case 'surname':
      title="Прізвище повинне починатись з великої літери і не містити цифр.\nЯкщо прізвище подвійне, використовуйте дефіс між прізвищами.";
      pattern="([А-ЩЙЬЮЯЇІЄҐ][а-щйьюяїієґ]+)|([А-ЩЙЬЮЯЇІЄҐ][а-щйьюяїієґ]+[-][А-ЩЙЬЮЯЇІЄҐ][а-щйьюяїієґ]+)";
      textError='Прізвище';
    break;
    case 'name-surname':
      title="Ім’я і По-батькові повинні починатись з великої літери і не містити цифр.";
      pattern="[А-ЩЙЬЮЯЇІЄҐ][а-щйьюяїієґ]+([ ])[А-ЩЙЬЮЯЇІЄҐ][а-щйьюяїієґ]+";
      textError='Ім’я По-батькові';
    break;
    case 'name':
      title="Ім’я повинне починатись з великої літери і не містити цифр.";
      pattern="[А-ЩЙЬЮЯЇІЄҐ][а-щйьюяїієґ]+";
      textError='Ім’я';
    break;
    case 'identification-num':
      title="Номер повинен містити 10 цифр";
      pattern="[0-9]{10,10}";
      textError='Ідентифікаційний номер';
    break;
    case 'tel-home':
      title="Номер у форматі 12-34-56";
      pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}";
      textError='Cтаціонарний номер';
    break;
    case 'tel-work':
      title="Номер у форматі 12-34-56";
      pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}";
      textError='Cтаціонарний номер';
    break;
    case 'tel-mobile':
      title="Номер у форматі +38 012 345-67-89";
      pattern="^([А-ЩЙЬЮЯЇІЄҐа-щйьюяїієґA-Za-z])[+][0-9]{2} [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}";
      textError='Мобільний номер';
    break;
    case 'mail-index':
      title="Поштовий індекс у форматі 12345";
      pattern="[0-9]{5}";
      textError='Поштовий індекс';
    break;
  }
  var inputItem=document.getElementsByName(name)[index];
  var error=document.createElement('div');
  error.id='notify';
  error.style.display='none';
  if(req===1) 
    inputItem.setAttribute("required","");
  inputItem.setAttribute("pattern",pattern);
  inputItem.setAttribute("title",title);
  inputItem.after(error);
  inputItem.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!event.target.validity.valid) {
      inputItem.className='invalid';
      error.textContent=textError;
      error.style.display='block';
    }
  });
  inputItem.addEventListener('input', function(event){
    if ('block'===error.style.display) {
      inputItem.className='';
      error.style.display='none';
    }
  });
}
//Запуск функції text_value()
function get_text_value() {
  text_value('surname',0,1);
  text_value('surname',1);
  text_value('surname',2,1);
  text_value('name-surname',0,1);
  text_value('name-surname',1);
  text_value('name',0,1);
  text_value('identification-num',0,1);
  text_value('tel-home',0);
  text_value('tel-work',0);
  text_value('tel-mobile',0,1);
  text_value('mail-index',0,1);
}
//Перевірка date полів
function date(name,index,req) {
  var title, index, textError;
  switch(index) {
    case 0:
    case 5:
      title="Виберіть день, місяць, рік";
      textError='Дата видачі';
    break;
    case 1:
      title="Виберіть день, місяць, рік";
      textError='Строк дії';
    break;
    case 2:
      title="Виберіть день, місяць, рік";
      textError='Дата народження';
    break;
    case 3:
      title="Виберіть день, місяць, рік";
      textError='Дата видачі';
    break;
    case 4:
      title="Виберіть день, місяць, рік";
      textError='Дата запису';
    break;
    case 6:
      title="Виберіть день, місяць, рік";
      textError='Дата заповнення';
    break;
  }
  var inputItem=document.getElementsByName(name)[index];
  var error=document.createElement('div');
  error.id='notify';
  error.style.display='none';
  if(req===1) 
    inputItem.setAttribute("required","");
  inputItem.setAttribute("title",title);
  inputItem.after(error);
  inputItem.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!event.target.validity.valid) {
      inputItem.className='invalid';
      inputItem.style.color='#DD2C00';
      error.textContent=textError;
      error.style.display='block';
    }
  });
  inputItem.addEventListener('input', function(event){
    if ('block'===error.style.display) {
      inputItem.className='';
      inputItem.style.color='#000';
      error.style.display='none';
    }
  });
}
//Запуск функції date()
function get_date() {
  date('date',0);
  date('date',1);
  date('date',2,1);
  date('date',3,1);
  date('date',4);
  date('date',5);
  date('date',6,1);
}
//Перевірка radio полів
function radio(name,index,type) {
  var radios=document.getElementsByName(name);
  var radioCollection=Array.from(radios);
  var radioItem=document.getElementsByName(name)[index];
  var labels=document.getElementsByClassName(type);
  var labelCollection=Array.from(labels);
  radioCollection.forEach(function(radio){
    radio.setAttribute("required","");
  })
  radioItem.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!radioItem.checked) {
      radioItem.className='invalid';
      labelCollection.forEach(function(label){
        label.className=type+' required';
      })
    }
  });
  radioItem.addEventListener('input', function(event){
    if (radioItem.checked) {
      radioItem.className='';
      labelCollection.forEach(function(label){
        label.className=type;
      })
      radioItem.removeAttribute("required",""); 
    }
  });
}
//Запуск функції radio()
function get_radio() {
  radio('sex',0,'radio-1');
  radio('sex',1,'radio-1');
  radio('residence',0,'radio-2');
  radio('residence',1,'radio-2');
}
//Перевірка checkbox полів
function checkbox(name,index,type) {
  var checkboxItem=document.getElementsByName(name)[index];
  var checkboxes=document.getElementsByName(name);
  var checkboxCollection=Array.from(checkboxes);
  var labelItem=document.getElementsByClassName(type)[index];
  var labels=document.getElementsByClassName(type);
  var labelCollection=Array.from(labels);
  checkboxCollection.forEach(function(checkbox){
    checkbox.setAttribute("required","");
  })
  checkboxItem.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!checkboxes[0].checked||checkboxes[1].checked||checkboxes[2].checked) {
      checkboxItem.className='invalid';
      labelItem.className=type+' required';
    }
  });
  checkboxItem.addEventListener('input', function(event){
    if (checkboxItem.checked) {
      checkboxCollection.forEach(function(checkbox){
        checkbox.removeAttribute("required","");
      })
      labelCollection.forEach(function(label){
        label.className=type;
      })
    }
  });
}
//Запуск функції checkbox()
function get_checkbox() {
  checkbox('data',0,'checkbox');
  checkbox('data',1,'checkbox');
  checkbox('data',2,'checkbox');
}