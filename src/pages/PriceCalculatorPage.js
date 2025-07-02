import React, { useState } from 'react';
import Select from 'react-select';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCouch, FaBoxes, FaWeight, FaBuilding, FaSortNumericUp, FaCheckCircle, FaBed, FaChair, FaTable, FaArrowRight, FaArrowUp, FaCity, FaLocationArrow } from 'react-icons/fa';

const yellow = '#eec921';
const flatItems = [
  { label: 'Sofa', value: 'sofa', icon: <FaCouch color={yellow} /> },
  { label: 'Chair', value: 'chair', icon: <FaChair color={yellow} /> },
  { label: 'TV', value: 'tv', icon: <FaTable color={yellow} /> },
  { label: 'Bed', value: 'bed', icon: <FaBed color={yellow} /> },
  { label: 'Cupboard', value: 'cupboard', icon: <FaBoxes color={yellow} /> },
  { label: 'Dining Table', value: 'dining-table', icon: <FaTable color={yellow} /> },
  { label: 'Fridge', value: 'fridge', icon: <FaBoxes color={yellow} /> },
  { label: 'Washing Machine', value: 'washing-machine', icon: <FaBoxes color={yellow} /> },
  { label: 'Other', value: 'other', icon: <FaBoxes color={yellow} /> },
];
const equipmentOptions = [
  { label: 'Trolley', value: 'trolley' },
  { label: 'Blankets', value: 'blankets' },
  { label: 'Straps', value: 'straps' },
];
const floorOptions = Array.from({ length: 11 }, (_, i) => ({ label: `${i}`, value: i }));

function PriceCalculatorPage() {
  const [form, setForm] = useState({
    name: '', phone: '',
    fromStreet: '', fromCity: '', fromState: '', fromPin: '',
    toStreet: '', toCity: '', toState: '', toPin: '',
    flatItems: [], equipment: [], load: 100, floor: '', lift: false,
    beds: 0, cupboards: 0, dining: 0, chairs: 0
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }));
  const handleMulti = (field, value) => setForm(f => ({ ...f, [field]: value }));
  const handleCheckbox = (field, value) => setForm(f => ({ ...f, [field]: f[field].includes(value) ? f[field].filter(v => v !== value) : [...f[field], value] }));
  const handleNumber = (field, value) => setForm(f => ({ ...f, [field]: Math.max(0, Number(value)) }));
  const validatePin = pin => /^\d{6}$/.test(pin);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Required';
    if (!form.phone || !/^\d{10}$/.test(form.phone)) e.phone = 'Valid 10-digit phone required';
    if (!form.fromStreet) e.fromStreet = 'Required';
    if (!form.fromCity) e.fromCity = 'Required';
    if (!form.fromState) e.fromState = 'Required';
    if (!validatePin(form.fromPin)) e.fromPin = '6-digit PIN required';
    if (!form.toStreet) e.toStreet = 'Required';
    if (!form.toCity) e.toCity = 'Required';
    if (!form.toState) e.toState = 'Required';
    if (!validatePin(form.toPin)) e.toPin = '6-digit PIN required';
    if (!form.flatItems.length) e.flatItems = 'Select at least one';
    return e;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;
    setSubmitting(true);
    // Build a detailed WhatsApp message with all user input
    const items = form.flatItems.map(i => i.label).join(', ') || 'None';
    const equipment = form.equipment.map(e => equipmentOptions.find(opt => opt.value === e)?.label).filter(Boolean).join(', ') || 'None';
    const msg =
      `Packers & Movers Enquiry\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Pickup From: ${form.fromStreet}, ${form.fromCity}, ${form.fromState}, ${form.fromPin}\n` +
      `Pickup To: ${form.toStreet}, ${form.toCity}, ${form.toState}, ${form.toPin}\n` +
      `Flat Items: ${items}\n` +
      `Equipment Available: ${equipment}\n` +
      `Expected Load: ${form.load} kg\n` +
      `Floor Number: ${form.floor || 'N/A'}\n` +
      `Lift Support: ${form.lift ? 'Yes' : 'No'}\n` +
      `Beds: ${form.beds}, Cupboards: ${form.cupboards}, Dining Tables: ${form.dining}, Chairs: ${form.chairs}`;
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/916351623121?text=${encodedMsg}`,'_blank');
    setSubmitting(false);
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <form onSubmit={handleSubmit} style={{
        maxWidth: 540, margin: '0 auto', background: '#fff', borderRadius: 28, boxShadow: '0 4px 32px rgba(238,201,33,0.13)', padding: '2.5rem 1.5rem 7rem 1.5rem', position: 'relative',
      }}>
        <h2 style={{ textAlign: 'center', color: yellow, marginBottom: 32, fontWeight: 900, letterSpacing: 1, fontSize: 32 }}>Price Calculator</h2>
        <Field label="Name" icon={<FaUser color={yellow} />} error={errors.name}>
          <input type="text" value={form.name} onChange={e=>handleChange('name',e.target.value)} style={inputStyle(errors.name)} placeholder="Your Name" autoFocus />
        </Field>
        <Field label="Phone Number" icon={<FaPhone color={yellow} />} error={errors.phone}>
          <input type="tel" value={form.phone} onChange={e=>handleChange('phone',e.target.value)} style={inputStyle(errors.phone)} placeholder="10-digit Mobile" maxLength={10} />
        </Field>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 0 }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <Field label="Pickup From - Street" icon={<FaMapMarkerAlt color={yellow} />} error={errors.fromStreet}>
              <input type="text" value={form.fromStreet} onChange={e=>handleChange('fromStreet',e.target.value)} style={inputStyle(errors.fromStreet)} placeholder="Street Address" />
            </Field>
            <Field label="City" icon={<FaCity color={yellow} />} error={errors.fromCity}>
              <input type="text" value={form.fromCity} onChange={e=>handleChange('fromCity',e.target.value)} style={inputStyle(errors.fromCity)} placeholder="City" />
            </Field>
            <Field label="State" icon={<FaLocationArrow color={yellow} />} error={errors.fromState}>
              <input type="text" value={form.fromState} onChange={e=>handleChange('fromState',e.target.value)} style={inputStyle(errors.fromState)} placeholder="State" />
            </Field>
            <Field label="PIN Code" icon={<FaSortNumericUp color={yellow} />} error={errors.fromPin}>
              <input type="text" value={form.fromPin} onChange={e=>handleChange('fromPin',e.target.value.replace(/\D/g,''))} style={inputStyle(errors.fromPin)} placeholder="6-digit PIN" maxLength={6} />
            </Field>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <Field label="Pickup To - Street" icon={<FaMapMarkerAlt color={yellow} />} error={errors.toStreet}>
              <input type="text" value={form.toStreet} onChange={e=>handleChange('toStreet',e.target.value)} style={inputStyle(errors.toStreet)} placeholder="Street Address" />
            </Field>
            <Field label="City" icon={<FaCity color={yellow} />} error={errors.toCity}>
              <input type="text" value={form.toCity} onChange={e=>handleChange('toCity',e.target.value)} style={inputStyle(errors.toCity)} placeholder="City" />
            </Field>
            <Field label="State" icon={<FaLocationArrow color={yellow} />} error={errors.toState}>
              <input type="text" value={form.toState} onChange={e=>handleChange('toState',e.target.value)} style={inputStyle(errors.toState)} placeholder="State" />
            </Field>
            <Field label="PIN Code" icon={<FaSortNumericUp color={yellow} />} error={errors.toPin}>
              <input type="text" value={form.toPin} onChange={e=>handleChange('toPin',e.target.value.replace(/\D/g,''))} style={inputStyle(errors.toPin)} placeholder="6-digit PIN" maxLength={6} />
            </Field>
          </div>
        </div>
        <Field label="Flat Items" icon={<FaCouch color={yellow} />} error={errors.flatItems}>
          <Select
            isMulti
            options={flatItems}
            value={form.flatItems}
            onChange={v=>handleMulti('flatItems',v)}
            placeholder="Select items..."
            styles={selectStyle(errors.flatItems)}
            formatOptionLabel={opt => <span style={{display:'flex',alignItems:'center',gap:8}}>{opt.icon}{opt.label}</span>}
          />
        </Field>
        <Field label="Equipment Available" icon={<FaCheckCircle color={yellow} />}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {equipmentOptions.map(opt => (
              <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
                <input type="checkbox" checked={form.equipment.includes(opt.value)} onChange={()=>handleCheckbox('equipment',opt.value)} style={{ accentColor: yellow }} /> {opt.label}
              </label>
            ))}
          </div>
        </Field>
        <Field label="Expected Load (kg)" icon={<FaWeight color={yellow} />}>
          <input type="range" min={50} max={2000} step={10} value={form.load} onChange={e=>handleChange('load',e.target.value)} style={{ width: '100%' }} />
          <div style={{ textAlign: 'right', color: yellow, fontWeight: 700 }}>{form.load} kg</div>
        </Field>
        <Field label="Floor Number" icon={<FaBuilding color={yellow} />}>
          <select value={form.floor} onChange={e=>handleChange('floor',e.target.value)} style={inputStyle()}>
            <option value="">Select Floor</option>
            {floorOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </Field>
        <Field label="Lift Support" icon={<FaArrowUp color={yellow} />}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
            <input type="checkbox" checked={form.lift} onChange={e=>handleChange('lift',e.target.checked)} style={{ accentColor: yellow }} /> Yes
          </label>
        </Field>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <Field label="Beds" icon={<FaBed color={yellow} />}>
            <input type="number" min={0} value={form.beds} onChange={e=>handleNumber('beds',e.target.value)} style={inputStyle()} />
          </Field>
          <Field label="Cupboards" icon={<FaBoxes color={yellow} />}>
            <input type="number" min={0} value={form.cupboards} onChange={e=>handleNumber('cupboards',e.target.value)} style={inputStyle()} />
          </Field>
        </div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
          <Field label="Dining Tables" icon={<FaTable color={yellow} />}>
            <input type="number" min={0} value={form.dining} onChange={e=>handleNumber('dining',e.target.value)} style={inputStyle()} />
          </Field>
          <Field label="Chairs" icon={<FaChair color={yellow} />}>
            <input type="number" min={0} value={form.chairs} onChange={e=>handleNumber('chairs',e.target.value)} style={inputStyle()} />
          </Field>
        </div>
        <button type="submit" disabled={submitting} style={{
          position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 100,
          width: '100%', maxWidth: 540, margin: '0 auto',
          background: yellow, color: '#222', fontWeight: 900, fontSize: 22,
          border: 'none', borderRadius: '24px 24px 0 0', padding: '22px 0',
          boxShadow: '0 -2px 16px rgba(238,201,33,0.15)', cursor: 'pointer',
          transition: 'background 0.2s', outline: 'none',
        }}>
          <FaArrowRight style={{ marginRight: 12, verticalAlign: -3 }} /> Calculate Price & Enquire on WhatsApp
        </button>
      </form>
    </div>
  );
}

function Field({ label, icon, children, error }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ fontWeight: 700, color: '#222', display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, marginBottom: 4 }}>
        {icon} {label}
      </label>
      {children}
      {error && <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{error}</div>}
    </div>
  );
}

const inputStyle = (error) => ({
  width: '100%', padding: '10px 12px', borderRadius: 10, border: error ? '2px solid red' : '1.5px solid #eee', fontSize: 16, marginTop: 2, boxShadow: error ? '0 0 0 2px #ffe0e0' : '0 1px 4px rgba(238,201,33,0.04)', outline: 'none', transition: 'border 0.2s, box-shadow 0.2s', background: '#fff',
});
const selectStyle = (error) => ({
  control: (base, state) => ({
    ...base,
    borderRadius: 10,
    borderColor: error ? 'red' : yellow,
    boxShadow: state.isFocused ? `0 0 0 2px ${yellow}33` : '0 1px 4px rgba(238,201,33,0.04)',
    '&:hover': { borderColor: yellow },
    minHeight: 44,
  }),
  menu: base => ({ ...base, borderRadius: 10, zIndex: 9999 }),
  multiValue: base => ({ ...base, background: yellow, color: '#222', borderRadius: 8 }),
  multiValueLabel: base => ({ ...base, color: '#222', fontWeight: 600 }),
  multiValueRemove: base => ({ ...base, color: '#222', ':hover': { background: '#fffbe6', color: yellow } }),
});

export default PriceCalculatorPage;
