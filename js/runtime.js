var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);var e=new Date("11/23/2023 00:10:00"),t=Math.trunc(234e8+(now-e)/1e3*17),a=(t/1496e5).toFixed(6),o=new Date("11/23/2023 00:10:00"),n=(now-o)/1e3/60/60/24,r=Math.floor(n),i=(now-o)/1e3/60/60-24*r,s=Math.floor(i);1==String(s).length&&(s="0"+s);var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);1==String(l).length&&(l="0"+l);var g=(now-o)/1e3-86400*r-3600*s-60*l,b=Math.round(g);1==String(b).length&&(b="0"+b);let c="";c=s<18&&s>=9?`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> Darling当前距离地球 ${t} 千米，约为 ${a} 个弗兰克斯 🚀</div>`:`<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> Darling当前距离地球 ${t} 千米，约为 ${a} 个弗兰克斯 🚀</div>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}setInterval((()=>{createtime()}),1e3);

// 保存原始标题
var originalTitle = document.title;

// 添加 visibilitychange 事件监听器
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
        // 用户离开页面时更改标题
        document.title = "欧尼酱别走ヽ(*。>Д<)o゜";
    } else {
        // 用户回到页面时显示其他文字持续3秒，然后再显示原始标题
        document.title = "八嘎ヾ(≧▽≦*)o";

        // 使用 setTimeout 延迟3秒后恢复原始标题
        setTimeout(function() {
            document.title = originalTitle;
        }, 1000);
    }
});

