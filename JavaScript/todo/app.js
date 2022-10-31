const main = document.querySelector('.artcl_main');
const userTask = main.querySelector('header input');
const addBtn = main.querySelector('header button');
const listTodo = main.querySelector('.list_todo');

addBtn.addEventListener('click',createListItem);



//투두를 저장할 배열
const tasks = JSON.parse(localStorage.getItem('tasklist'))||[] 

// 초기화면에서 저장되어 있는 데이터 가지고 목록을 생성합니다
if(tasks.length>0){
    tasks.forEach((task)=>{
        genItem(task.val,task.checked)
    })
    showDownload()
}


function createListItem(){
    const inpVal = userTask.value;

    if(inpVal){
        //할일을 저장하는 객체를 생성합니다
        const tempTask = {
          val : inpVal,
          checked : false  
        };
        // 할일 목록에 새로운 할일을 저장합니다
        tasks.push(tempTask)

        // 목록 요소를 생성합니다.
        genItem(inpVal,false);

        // 할 일 데이터를 localstroage에 저장
        saveTasks()

        // 경우에 따라 다운로드 버튼 노출 함수
        showDownload()
    }else{
        errorMsg('내용을 작성해주세요')
    }
}

//목록 요소 생성
function genItem(val,complte){
    const li = document.createElement('li');
    li.textContent = val;
    listTodo.appendChild(li);

    // 인풋 입력값 초기화
    userTask.value='';

    //만약 수행한 일이라면?
    if(complte){
        li.classList.add('done')
    }

    li.addEventListener('click',()=>{
        li.classList.toggle('done')
        //할 일 업데이트 함수
        buildTask()
    })
    
    // 삭제버튼 만들기
    const btn  = document.createElement('button');
    btn.innerHTML= `<i class="fa-solid fa-trash"></i>`
    li.appendChild(btn)

    btn.addEventListener('click',()=>{
        li.remove();
        //할 일 업데이트 함수
        buildTask()
    })

}

//로컬스토리지에 할 일 목록 저장하는 함수
function saveTasks(){
    localStorage.setItem('tasklist',JSON.stringify(tasks))
}

//할 일 정보를 업데이트 하는 함수, 할 일 클릭했을 때 
function buildTask(){
    tasks.length = 0; // 업데이트 하기 전에 기존 데이터를 초기화 합니다
    const curList = document.querySelectorAll('li');

    curList.forEach((el)=>{
        const tempTask = {
            val : el.textContent,
            checked : false
        }
        if(el.classList.contains('done')){
            tempTask.checked = 'true';
        }
        tasks.push(tempTask);
    })
    saveTasks()
}




//경고 메시지 함수

const message = document.createElement('strong');
message.style.display = 'none';
message.classList.add('txt_invalid');
main.appendChild(message)

function errorMsg(msg){
    message.style.display='block';
    message.textContent= msg;
    userTask.focus()
}


// 다운로드 버튼 생성
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn');
downloadBtn.textContent = '리스트 다운로드';
main.appendChild(downloadBtn);
downloadBtn.addEventListener('click', downloadFile);


// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {
    const curList = listTodo.querySelectorAll('li');

    if (curList.length > 0) {
        downloadBtn.style.display = 'block';
    } else {
        downloadBtn.style.display = 'none';
    }
}

function downloadFile() {
    let temp = '<나의 할일 목록>\n\n';

    const curList = listTodo.querySelectorAll('li');

    curList.forEach((el) => {
        if (el.classList.contains('done')) {
            temp += '완료 - ';
        }
        temp += `${el.textContent}\n`;
    })

    let element = document.createElement('a');

    element.setAttribute('href', `data:text/plain;charset=utf-8,${temp}`);

    element.setAttribute('download', 'todoList.hwp');

    // 클릭 가능한 요소라면 클릭을 시뮬레이션합니다.
    element.click();

    // 메모리상에서 a 태그를 제거합니다.
    element = null;
}