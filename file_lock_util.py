# import win32file
# import msvcrt

# # ファイルのハンドルを開く
# handle = win32file.CreateFile(
#     "test.txt",
#     win32file.GENERIC_READ | win32file.GENERIC_WRITE,
#     0,
#     None,
#     win32file.OPEN_EXISTING,
#     win32file.FILE_ATTRIBUTE_NORMAL,
#     None
# )

# # ファイルをロックする
# try:
#     win32file.LockFileEx(handle, win32file.LOCKFILE_EXCLUSIVE_LOCK, 0, -0x10000, msvcrt.get_osfhandle(handle))
#     print("ファイルをロックしました")
# finally:
#     # ファイルのロックを解除する
#     win32file.UnlockFile(handle, 0, -0x10000, 0, msvcrt.get_osfhandle(handle))
#     print("ファイルのロックを解除しました")

# # ファイルのハンドルを閉じる
# handle.Close()





# 修正
import msvcrt
import os

# ファイルを開く
file_path = 'test.txt'
file_handle = os.open(file_path, os.O_RDWR)

# ファイルをロックする
msvcrt.locking(file_handle, msvcrt.LK_NBLCK, 0)

# ロックされたファイルで何かを行う

# ロックを解除する
msvcrt.locking(file_handle, msvcrt.LK_UNLCK, 0)

# ファイルを閉じる
os.close(file_handle)
