<template>

<div class="login__container">
    <div class="flex justify-center font-bold text-2xl mb-10">
        Chọn thể thống bạn muốn sử dụng
    </div>
    <div class="login--general__wrapper">
        <div class="login--general__first">
            <div class="login--general__bottom">
            </div>
            <div class="login--general__top">
                <div>
                    <img src="/public/theLogo/techeyes.png" alt="logoTechEyes" class="w-16 h-16 object-cover"></div>
                <div class="font-medium text-xl">TechEyes</div>
                <div class="module__des">TechZai sử dụng công nghệ AI để tự động chấm công nhân viên chỉ trong vài giây, giúp tiết kiệm thời gian và công sức của các quản lý và nhân viên. Với việc sử dụng camera AI, TechZai có thể nhận diện khuôn mặt và xác định danh tính của mỗi nhân viên, từ đó tự động ghi nhận thời gian vào và ra làm việc của họ.

                </div>
                <div><button class="btn w-40 flex"><a href="http://techeyes.techzen.vn/">Đi đến TechEyes</a></button></div>
            </div>
        </div>
        <div class="login--general__second">
            <div class="login--general__bottom">
            </div>
            <div class="login--general__top">
                <div><img src="/public/theLogo/techpoint.png" alt="logoTechpoint"  class="w-16 h-16 object-cover"></div>
                <div class="font-medium text-xl">TechPoint</div>
                <div class="module__des">TechPoint cung cấp các tính năng vui nhộn như là tích điểm và đổi điểm nhận quà để doanh nghiệp áp dụng các điều kiện và chính sách cho nhân viên. TechPoint ra đời với mong muốn đóng góp vào việc xây dựng văn hóa cho doanh nghiệp, mang lại cảm giác vui vẻ cho nhân viên sau những giờ làm căng thẳng.</div>
                <div><button class="btn w-40 flex"><a href="http://techpoint.techzen.vn/">Đi đến TechPoint</a></button></div>
            </div>
        </div>
        <div class="login--general__third">
            <div class="login--general__bottom">
            </div>
            <div class="login--general__top">
                <div><img src="/public/theLogo/techsale.png" alt="logoTechsale"  class="w-16 h-16 object-cover"></div>
                <div class="font-medium text-xl">TechSale</div>
                <div class="module__des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut facilis illo iure nam natus neque odit quibusdam tenetur, vero. Asperiores facilis iure magni minima nisi nulla quibusdam quos sint.</div>
                <div><button class="btn w-40 flex"><a href="http://techsale.techzen.vn/">Đi đến TechSale</a></button></div>
            </div>
        </div>
        <div class="login--general__four">
            <div class="login--general__bottom">
            </div>
            <div class="login--general__top">
                <div><img src="/public/theLogo/techport.png" alt="logoTechport"  class="w-16 h-16 object-cover"></div>
                <div class="font-medium text-xl">TechPort</div>
                <div class="module__des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium consequatur eos eum eveniet, facere fugiat molestiae mollitia numquam optio provident quisquam recusandae rerum sed sequi, soluta suscipit velit, vero!</div>
                <div><button class="btn w-40 flex"><a href="http://techport.techzen.vn/">Đi đến TechPort</a></button></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {onMounted} from "vue";

export default {
    name: "GeneralLogin",
    mounted() {
        document.body.classList.remove('login')
        document.body.classList.remove('main')
        document.body.classList.add('login__general')
    },
    beforeDestroy() {
        document.body.classList.remove('login__general')
    }
}
</script>

<style>
.login__container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    justify-content: center ;
}
.login--general__wrapper {
    display: flex;
    align-items: center;
    gap: 56px;
    justify-content: center;
}
.login__general {
    background-color: #F4F5FA;

}
.login--general__first,
.login--general__second,
.login--general__third,
.login--general__four {
    width: 20%;
    height: 350px;
    position: relative;
}
.login--general__bottom {
    width: 100%;
    height: 326px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #FFFBEC;
}
.login--general__top {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    border-radius: 14px;
    background: white;
    height: 326px;
    position: absolute;
    top: 24px;
    left: 24px;
    padding: 20px;
}
.module__des {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
