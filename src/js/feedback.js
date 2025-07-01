import Swal from 'sweetalert2';

const form = document.querySelector('.feedback-form');
const inputs = form.querySelectorAll('input[required], textarea[required]');
const checkbox = form.querySelector('input[type="checkbox"]');
const submitBtn = form.querySelector('.feedback-submit');

function validateForm() {
  const allFilled = Array.from(inputs).every(
    input => input.value.trim() !== ''
  );
  const checkboxChecked = checkbox.checked;
  submitBtn.disabled = !(allFilled && checkboxChecked);
}

inputs.forEach(input => input.addEventListener('input', validateForm));
checkbox.addEventListener('change', validateForm);

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Success!',
    text: 'Your message has been sent.',
    icon: 'success',
    confirmButtonColor: '#df3d3a',
    background: '#1e1e1e',
    color: '#e7e7e7',
  });

  form.reset();
  submitBtn.disabled = true;
});
