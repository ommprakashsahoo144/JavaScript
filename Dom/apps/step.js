let msgTag=document.getElementById('msg-tag');
let prevBtn=document.getElementById('prev-btn');
let nextBtn=document.getElementById('next-btn');

let step1=document.getElementById('one');
let step2=document.getElementById('two');
let step3=document.getElementById('three');

let modalEl=document.getElementById('modal');
let modalBtn=document.getElementById('modal-btn');
let closeBtn=document.getElementById('close-btn');

let messages=["Attend Classes 📔","Practice Concepts✍️","Give Presentation🅿️"];

let step=1;

function updateUI()
{
    msgTag.textContent=`Step ${step} :- ${messages[step-1]}`;

    if(step>=1) step1.classList.add('abc');
    else step1.classList.remove('abc');

    if(step>=2) step2.classList.add('abc');
    else step2.classList.remove('abc');

    if(step>=3) step3.classList.add('abc');
    else step3.classList.remove('abc');
 }
updateUI();

nextBtn.addEventListener('click',function()
{
    if(step<3)step++;
    updateUI();
})

prevBtn.addEventListener('click',function()
{
    if(step>1)step--;
    updateUI();
})

modalBtn.addEventListener('click',function()
{
    modalEl.classList.remove('hidden');
})

closeBtn.addEventListener('click',function()
{
    modalEl.classList.add('hidden');
})

document.addEventListener('keydown',function(e)
{
    if(e.key==="Escape" && !modalEl.classList.contains('hidden'))
    modalEl.classList.add('hidden');
})