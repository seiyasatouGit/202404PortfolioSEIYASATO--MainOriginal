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

# ファイルの読み込み
with open("example.txt", "r") as file:
    content = file.read()
    print("ファイルの内容:", content)

# ファイルの書き込み
with open("example.txt", "w") as file:
    file.write("Hello, World!")


    # ファイルの読み込み（バイナリモード）
with open("binary_data.bin", "rb") as file:
    binary_content = file.read()
    print("バイナリデータ:", binary_content)






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






import msvcrt

# バイナリデータの読み込み
binary_data = msvcrt.getch()
print("読み込まれたバイナリデータ:", binary_data)

