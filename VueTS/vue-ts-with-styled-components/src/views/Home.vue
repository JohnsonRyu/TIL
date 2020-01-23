<template>
  <div class="home">
    <Button>Button</Button>
    <ButtonJS>Button</ButtonJS>
    <StyledInput />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ButtonJS from "@/components/Button.js";
import { StyledInput } from "@/components/Input.ts";

export default {
  name: "home",
  components: {
    Button,
    ButtonJS,
    StyledInput
  }
};
</script>
