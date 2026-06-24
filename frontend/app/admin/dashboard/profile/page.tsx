'use client';

import { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { adminApi } from '@/lib/api';
import { User, Save, CheckCircle, Lock } from 'lucide-react';

export default function ProfilePage() {
  const { admin } = useAdmin();
  const [form, setForm] = useState({ name: admin?.name || '', email: admin?.email || '', currentPassword: '', newPassword: '', confirmPassword: '' });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const set = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setError('New passwords do not match.');
      return;
    }
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      const payload: Record<string, string> = { name: form.name, email: form.email };
      if (form.currentPassword && form.newPassword) {
        payload.currentPassword = form.currentPassword;
        payload.newPassword = form.newPassword;
      }
      await adminApi.updateProfile(payload);
      setSuccess('Profile updated successfully!');
      setForm(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
      setTimeout(() => setSuccess(''), 4000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally { setSaving(false); }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-2xl">
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">Admin Profile</h1>
      <p className="text-white/50 text-sm mb-6 sm:mb-8">Manage your account details and password.</p>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8 p-4 sm:p-6 bg-[#161616] rounded-2xl border border-white/10">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white shrink-0">
          {admin?.name?.[0]?.toUpperCase() || admin?.email?.[0]?.toUpperCase() || 'A'}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-base sm:text-lg text-white">{admin?.name || 'Admin'}</div>
          <div className="text-white/40 text-sm truncate">{admin?.email}</div>
          <div className="text-xs text-[#6EE7B7] mt-1 capitalize">{admin?.role || 'Administrator'}</div>
        </div>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 rounded-2xl flex items-center gap-3 text-[#6EE7B7] text-sm">
          <CheckCircle className="w-5 h-5 shrink-0" />{success}
        </div>
      )}
      {error && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">{error}</div>}

      <form onSubmit={handleSave} className="space-y-5 sm:space-y-6">
        <div className="p-4 sm:p-6 bg-[#161616] rounded-2xl border border-white/10 space-y-4">
          <h2 className="font-semibold text-[#6EE7B7] text-sm flex items-center gap-2"><User className="w-4 h-4" />Account Information</h2>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Display Name</label>
            <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name"
              className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-xl focus:border-[#6EE7B7] outline-none text-white text-sm placeholder-white/25 transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="admin@greatodeal.com"
              className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-xl focus:border-[#6EE7B7] outline-none text-white text-sm placeholder-white/25 transition-all" />
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-[#161616] rounded-2xl border border-white/10 space-y-4">
          <h2 className="font-semibold text-[#6EE7B7] text-sm flex items-center gap-2"><Lock className="w-4 h-4" />Change Password</h2>
          <p className="text-xs text-white/30">Leave blank to keep current password</p>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Current Password</label>
            <input type="password" value={form.currentPassword} onChange={e => set('currentPassword', e.target.value)} placeholder="Enter current password"
              className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-xl focus:border-[#6EE7B7] outline-none text-white text-sm placeholder-white/25 transition-all" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">New Password</label>
              <input type="password" value={form.newPassword} onChange={e => set('newPassword', e.target.value)} placeholder="New password"
                className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-xl focus:border-[#6EE7B7] outline-none text-white text-sm placeholder-white/25 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Confirm Password</label>
              <input type="password" value={form.confirmPassword} onChange={e => set('confirmPassword', e.target.value)} placeholder="Confirm password"
                className={`w-full px-4 py-3 bg-[#0F0F0F] border rounded-xl focus:border-[#6EE7B7] outline-none text-white text-sm placeholder-white/25 transition-all ${form.confirmPassword && form.newPassword !== form.confirmPassword ? 'border-red-500/50' : 'border-white/10'}`} />
            </div>
          </div>
          {form.confirmPassword && form.newPassword !== form.confirmPassword && (
            <p className="text-red-400 text-xs">Passwords do not match</p>
          )}
        </div>

        <button type="submit" disabled={saving}
          className="flex items-center gap-2 px-8 py-3 bg-[#6EE7B7] text-[#121212] rounded-xl font-semibold hover:bg-[#5CD7A5] transition-all disabled:opacity-50 text-sm">
          <Save className="w-4 h-4" />{saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
