import{_ as _export_sfc,r as ref,o as openBlock,c as createBlock,w as withCtx,b as createVNode,a as createBaseVNode,e as withDirectives,v as vModelText,u as unref,i as isRef}from"./index-Bu-6ehgJ.js";import{M as MyTitle}from"./MyTitle-DtyWnuIV.js";import{M as MyContainer2}from"./MyContainer2-CV8gLs5v.js";const _hoisted_1={class:"code_area"},__default__={components:{"my-title":MyTitle,"my-container2":MyContainer2}},_sfc_main=Object.assign(__default__,{__name:"task2",setup(__props){let answer=`
let ball = document.querySelector(".ball");
console.log(ball);
document.onkeydown = function(event){
    console.log("出发了事件");
    event = event || window.event;
    console.log(event);
    let code = event.keyCode;
    console.log(code);
    if(code=='37'){
        console.log('左');
        ball.style.left = ball.offsetLeft-10+'px';
    }else if(code=='38'){
        console.log('上');
        ball.style.top= ball.offsetTop-10+"px";
    }else if(code=='39'){
        console.log('右');
        ball.style.left=ball.offsetLeft+10+'px';
    } else if(code=='40'){
        console.log('下');
        ball.style.top=ball.offsetTop+10+'px';
    }
}

`;console.log(answer);let codeLeft=ref("");const executeCodeLeft=()=>{const code=codeLeft.value;try{eval(code)}catch(t){console.error("代码执行出错:",t)}};return(t,e)=>(openBlock(),createBlock(MyContainer2,null,{default:withCtx(()=>[createVNode(MyTitle,{title1:"move ball",title2:"Bounce when moving to the edge"}),e[2]||(e[2]=createBaseVNode("div",{class:"title"},[createBaseVNode("div",{class:"title-content"},"Code input area"),createBaseVNode("div",{class:"title-content"},"Effect display area")],-1)),createBaseVNode("main",null,[createBaseVNode("div",_hoisted_1,[withDirectives(createBaseVNode("textarea",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>isRef(codeLeft)?codeLeft.value=o:codeLeft=o),placeholder:"Enter the javascript code here",style:{width:"763px",height:"495px",border:"none",outline:"none",resize:"none","font-size":"20px"}},null,512),[[vModelText,unref(codeLeft)]])]),createBaseVNode("button",{onClick:executeCodeLeft,class:"executeButton"},"run"),e[1]||(e[1]=createBaseVNode("div",{class:"effect_area"},[createBaseVNode("div",{class:"ball"})],-1))])]),_:1}))}}),task2=_export_sfc(_sfc_main,[["__scopeId","data-v-4a8f0b65"]]);export{task2 as default};
