<template>
  <div class="home">
    <Button>Button</Button>
    <ButtonJS>Button</ButtonJS>
    <CButtonPropsCond>zfsfqw</CButtonPropsCond>
    <ButtonVue type="primary">zzz</ButtonVue>
    <ButtonVue type="error" radius>zzz</ButtonVue>
    <ButtonVue type="success">zzz</ButtonVue>
    <ButtonVue>zzz</ButtonVue>
    <StyledInput />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ButtonVue from "@/components/ButtonVue.vue";
import ButtonJS from "@/components/Button.js";
import CButtonPropsCond from "@/components/CButtonPropsCond.js";
import { StyledInput } from "@/components/Input.ts";

export default {
  name: "home",
  components: {
    Button,
    ButtonJS,
    CButtonPropsCond,
    ButtonVue,
    StyledInput
  }
};
</script>
