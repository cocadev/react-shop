export function SectionPlaceOrder(props) {

  const { onClickBtn } = props;

  return (
    <div className='bg-white p25' style={{ height: 210, width: 380 }}>
      <div className='row align-center justify-between mt10'>
        <div className='text18 grey font-weight-400'>Subtotal</div>
        <div className='text18 font-weight-500'>$ 87.56</div>
      </div>
      <div className='row align-center justify-between mt5'>
        <div className='text18 grey font-weight-400'>Estimated Taxes</div>
        <div className='text18 font-weight-500'>$ 2.40</div>
      </div>
      <div className='row align-center justify-between mt5'>
        <div className='text18 grey font-weight-400'>Savings</div>
        <div className='text18 green font-weight-500'>- $ 5.02</div>
      </div>

      <div className='divider mt10' />

      <div className='row align-center justify-between mt10'>
        <div className='text18'>Total</div>
        <div className='text18 green'>$ 83.72</div>
      </div>

      <div className='btn-green-big mt30 full' onClick={onClickBtn}>
        Place Order
      </div>
    </div>
  );
}

