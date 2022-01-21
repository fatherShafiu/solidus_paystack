  function payNowWithPaystack(event){
      const checkedPaymentMethod = $('#payment-method-fields input[type="radio"]:checked').val();
      const paystackPaymentMethodId = $("#paystack_checkout_payload").data("paymentgateway");

      if (paystackPaymentMethodId.toString() === checkedPaymentMethod) {
          const currentOrder = $("#paystack_checkout_payload").data("current_order_id");
          const orderTotal = $("#paystack_checkout_payload").data("order_total");
          const email = $("#paystack_checkout_payload").data("billing_email");
          payWithPaystack(event, currentOrder, orderTotal, email);
      }
  }

  function payWithPaystack(event, orderId, amount, email) {
      event.preventDefault();
      const secret = $("#paystack_checkout_payload").data("secret");
      let handler = PaystackPop.setup({
        key: secret,
        email: email,
        amount: amount * 100,
        ref: orderId,
        onClose: function(){
            return false;
        },
        callback: function(){
            $('#checkout_form_payment').submit();
            return true;
        }
      });

      handler.openIframe();

  }