'use client';

import { useState, useEffect } from 'react';
import { chatApi } from '@/lib/api';
import { MessageSquare, User, Bot, Clock, ArrowLeft } from 'lucide-react';

interface ChatSession {
  _id: string;
  username: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  createdAt: string;
  updatedAt: string;
}

export default function ChatsPage() {
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ChatSession | null>(null);

  useEffect(() => {
    chatApi.getAll()
      .then(res => setChats(res.data.data || []))
      .catch(() => setChats([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="p-4 sm:p-6 lg:p-8 flex justify-center py-12">
      <div className="w-8 h-8 border-4 border-[#6EE7B7] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">AI Chat Sessions</h1>
      <p className="text-white/50 text-sm mb-6 sm:mb-8">{chats.length} total conversations</p>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Chat List */}
        <div className={`bg-[#161616] rounded-2xl border border-white/10 overflow-hidden ${selected ? 'hidden lg:block' : ''}`}>
          <div className="p-4 border-b border-white/10 text-xs font-semibold text-white/40 uppercase tracking-wider">Sessions</div>
          <div className="divide-y divide-white/5 max-h-[65vh] overflow-y-auto">
            {chats.length === 0 && <div className="p-8 text-center text-white/30">No chat sessions yet.</div>}
            {chats.map(chat => (
              <button key={chat._id} onClick={() => setSelected(chat)}
                className={`w-full p-4 text-left hover:bg-white/[0.03] transition-colors ${selected?._id === chat._id ? 'bg-[#6EE7B7]/10 border-l-2 border-[#6EE7B7]' : ''}`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {chat.username[0]?.toUpperCase() || 'U'}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-white/90 truncate">{chat.username}</div>
                      <div className="text-xs text-white/40">{chat.messages.length} messages</div>
                    </div>
                  </div>
                  <div className="text-xs text-white/30 shrink-0">
                    {new Date(chat.updatedAt).toLocaleDateString()}
                  </div>
                </div>
                {chat.messages.length > 0 && (
                  <div className="mt-2 text-xs text-white/30 truncate pl-12">
                    {chat.messages[chat.messages.length - 1]?.content?.substring(0, 60)}...
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Detail */}
        <div className={`bg-[#161616] rounded-2xl border border-white/10 flex flex-col ${selected ? '' : 'hidden lg:flex'}`}>
          {selected ? (
            <>
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <button onClick={() => setSelected(null)} className="lg:hidden p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="w-9 h-9 bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {selected.username[0]?.toUpperCase() || 'U'}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-white">{selected.username}</div>
                  <div className="text-xs text-white/40 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(selected.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[55vh]">
                {selected.messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#3B82F6]' : 'bg-[#6EE7B7]'}`}>
                      {msg.role === 'user' ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-[#121212]" />}
                    </div>
                    <div className={`max-w-[80%] sm:max-w-xs px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#3B82F6]/20 text-white/90' : 'bg-white/5 text-white/80'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center p-8">
              <div>
                <MessageSquare className="w-12 h-12 text-white/10 mx-auto mb-3" />
                <p className="text-white/30 text-sm">Select a chat session to view the conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
