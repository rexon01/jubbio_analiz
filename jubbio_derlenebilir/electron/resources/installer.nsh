!macro customInit
  ; Uygulama ve child process'leri kapat
  nsExec::ExecToLog 'taskkill /f /im Jubbio.exe /t'
  Sleep 2000

  ; Installer kendi dizinini kilitlememesi için temp'e kopyala
  StrCmp $EXEDIR $INSTDIR 0 +4
    CopyFiles /SILENT "$EXEPATH" "$TEMP\JubbioSetupTemp.exe"
    Exec '"$TEMP\JubbioSetupTemp.exe" $CMDLINE'
    Quit

  ; Kalan dosyaları temizle
  RMDir /r /REBOOTOK "$INSTDIR"
  ClearErrors
!macroend

!macro preInit
  SetOverwrite on
!macroend

!macro customUnInstall
  SetDetailsPrint none
  nsExec::ExecToLog 'taskkill /f /im Jubbio.exe /t'
  Sleep 1000
  RMDir /r /REBOOTOK "$INSTDIR"
  ClearErrors
!macroend
