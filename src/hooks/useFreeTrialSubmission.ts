import { useState } from 'react'
import { supabase, type FreeTrialSubmission } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export const useFreeTrialSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const submitFreeTrialForm = async (formData: Omit<FreeTrialSubmission, 'id' | 'created_at'>) => {
    setIsSubmitting(true)
    
    try {
      const { data, error } = await supabase
        .from('free_trial_submissions')
        .insert([formData])
        .select()
        .single()

      if (error) {
        console.error('Error submitting form:', error)
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your form. Please try again.",
          variant: "destructive",
        })
        return { success: false, error }
      }

      toast({
        title: "Success!",
        description: "Your free trial request has been submitted successfully.",
      })
      
      return { success: true, data }
    } catch (error) {
      console.error('Unexpected error:', error)
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
      return { success: false, error }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submitFreeTrialForm,
    isSubmitting
  }
}