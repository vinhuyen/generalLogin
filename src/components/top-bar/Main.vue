<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] mt-12 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-4"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="-intro-x hidden md:flex">
        <img
          alt="theLogo"
          class="w-20 "
          src="/dolphin.png"
        />
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x h-full mr-auto breadcrumb breadcrumb-light text-lg font-bold">
          Where the value is defined
      </nav>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Notifications -->
        <Dropdown v-if="getTokenFromCookies()" class="intro-x w-8 h-8">
            <DropdownToggle
                    tag="div"
                    role="button"
                    class="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
            >
                <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="getUserInfo.avtUrl"
                />
            </DropdownToggle>
            <DropdownMenu class="w-56">
                <DropdownContent
                        class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
                >
                    <DropdownHeader tag="div" class="!font-normal">
                        <div class="font-medium">
                            {{ getUserInfo.name }}
                        </div>
                        <div class="text-xs text-white/60 mt-0.5 dark:text-slate-500">
                            {{ wrapText(getUserInfo.email) }}
                        </div>
                    </DropdownHeader>
                    <DropdownItem  @click="handleRoute" class="dropdown-item hover:bg-white/5">
                        <LogOutIcon class="w-4 h-4 mr-2" />   {{ getDropdownLabel }}
                    </DropdownItem>
                    <DropdownItem @click="handleLogout" class="dropdown-item hover:bg-white/5">
                        <ToggleRightIcon class="w-4 h-4 mr-2" /> Đăng xuất</DropdownItem
                    >
                </DropdownContent>
            </DropdownMenu>
        </Dropdown>

        <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {getTokenFromCookies} from "@/utils/localStorageUtils";

export default {
	name: 'Main',
	data: () => ({
		isRoute: true,
		name: ''
	}),

	props:{
		LoginValue: String
	},
	computed: {
		...mapGetters('auth', ['getUserInfo']),
		LoginValue() {
			return this.getUserInfo.authorities[0];
		},
		getDropdownLabel() {
			if (this.$route.fullPath === '/admin') {
				return 'Trang nhân viên';
			}
			if (this.$route.fullPath === '/') {
				return 'Trang quản lý';
			}
		}
	},
	methods: {
		getTokenFromCookies,
		...mapActions('auth', ['logout']),
		handleLogout() {
			const isLogout = this.logout();
			if (isLogout) {
				this.$router.push('/login');
			} else {
				window.alert("Đăng xuất không thành công")
			}
		},
		handleRoute() {
			if (this.$route.fullPath === '/admin') {
				this.$router.replace('/');
			}
			if ((this.$route.fullPath === '/')){
				this.$router.push('/admin');
			}
		},
		wrapText(text) {
			if (text?.length > 32) {
				return text?.slice(0, 32) + "\n" + text?.slice(32);
			}
			return text;
		},
	},
}
</script>

