<template>
  <div class="container mx-auto">
    <form @submit.prevent="submitForm" class="max-w-lg mx-auto mt-8">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nome do dono/responsável</label>
        <input v-model="formData.name" type="text" id="name" name="name" class="form-input mt-1 block w-full rounded-md border border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div class="mb-4">
        <label for="company" class="block text-sm font-medium text-gray-700">Nome da empresa</label>
        <input v-model="formData.company" type="text" id="company" name="company" class="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div class="mb-4">
        <label for="category" class="block text-sm font-medium text-gray-700">Categoria</label>
        <select v-model="formData.category" id="category" name="category" class="form-select mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3">
          <option value="" disabled selected>Select a category or type a new one</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="zipcode" class="block text-sm font-medium text-gray-700">CEP</label>
        <input v-model="formData.zipCode" type="text" id="zipcode" name="zipcode" class="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700">Endereço</label>
        <input v-model="formData.address" type="text" id="address" name="address" class="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div class="mb-4">
        <label for="number" class="block text-sm font-medium text-gray-700">Número</label>
        <input v-model="formData.number" type="text" id="number" name="number" class="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div class="mb-4">
        <label for="neighborhood" class="block text-sm font-medium text-gray-700">Bairro</label>
        <input v-model="formData.neighborhood" type="text" id="neighborhood" name="neighborhood" class="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div class="mb-4">
        <label for="complement" class="block text-sm font-medium text-gray-700">Complemento</label>
        <input v-model="formData.complement" type="text" id="complement" name="complement" class="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
      </div>
      <div v-for="(phoneNumber, index) in formData.phoneNumbers" :key="index" class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Contato</label>
        <div class="flex items-center">
          <input v-model="formData.phoneNumbers[index]" :id="'phone' + index" :name="'phone' + index" type="text" class="form-input mt-1 flex-1 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3" />
          <button v-if="index === 0" type="button" @click="addPhoneField" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
          <button v-else type="button" @click="removePhoneField(index)" class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-</button>
        </div>
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea v-model="formData.description" id="description" name="description" class="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg py-2 px-3"></textarea>
      </div>
      <div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RegisterForm',
  setup() {
    const formData = {
      name: '',
      company: '',
      category: '',
      zipCode: '',
      addressNeighborhood: '',
      number: '',
      phoneNumbers: [''],
      description: ''
    };

    const categories = ['Category 1', 'Category 2', 'Category 3']; // Substitua com suas categorias

    const phoneNumbersRef = ref(formData.phoneNumbers);

    const addPhoneField = () => {
      phoneNumbersRef.value.push('');
    };

    const removePhoneField = index => {
      phoneNumbersRef.value.splice(index, 1);
    };

    const submitForm = () => {
      formData.phoneNumbers = [...phoneNumbersRef.value];
      console.log(formData);
      // Lógica para enviar os dados do formulário
    };

    return {
      formData,
      categories,
      addPhoneField,
      removePhoneField,
      submitForm
    };
  }
};
</script>

<style>
/* Estilos Tailwind CSS ou importe um arquivo .css com os estilos */
</style>
